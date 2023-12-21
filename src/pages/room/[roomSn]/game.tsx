import { useRouter } from 'next/router';
import useQueryGetRoomInfo from '@/hooks/room/useQueryGetRoomInfo';
import { Avatar, Button, Checkbox, Chip, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { stringAvatar } from '@/utils/muiAvatar';
import { useRef, useState } from 'react';
import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';
import { ACCESS_TOKEN } from '@/defines/token';
import { getCookie } from 'cookies-next';
import { Loading } from '@/components/common';

type GoalType = 'random' | 'first' | 'last';

export default function RoomGamePage() {
  useCheckHasAuth({});

  const router = useRouter();
  const { roomSn } = router.query;

  const {
    data: roomInfo,
    isLoading: isLoadingRoomInfo,
    refetch: getRoomInfo,
  } = useQueryGetRoomInfo({
    req: { roomSn: Number(roomSn) },
    queryOption: {
      enabled: !!roomSn,
      onSuccess: (response) => {
        setMemberList(response.memberList.map((i) => i.nickname));
      },
    },
  });

  const [memberList, setMemberList] = useState<string[]>([]);
  const [goalType, setGoalType] = useState<GoalType>('random');
  const [startGame, setStartGame] = useState<boolean>(false);
  const [goalCount, setGoalCount] = useState<number>(0);

  const countRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const handleChangeMemberList = (nickname: string, checked: boolean) => {
    if (checked) {
      setMemberList([...memberList, nickname]);
    } else {
      setMemberList(memberList?.filter((i) => i !== nickname));
    }
  };

  const handleGoalCount = (_goalType: GoalType) => {
    if (!countRef.current) return;

    const count = countRef.current?.value || 1;
    const maxGoalCount = +(memberList.length + 1) * +count - 1 || 0;
    switch (_goalType) {
      case 'random':
        return setGoalCount(Math.floor(Math.random() * maxGoalCount) + 1);
      case 'first':
        return setGoalCount(1);
      case 'last':
        return setGoalCount(maxGoalCount);
      default:
        return setGoalCount(0);
    }
  };

  const handleChangeGoalType = (_goalType: GoalType) => {
    setGoalType(_goalType);
    handleGoalCount(_goalType);
  };

  const handleClickStartGame = () => {
    if (goalType === 'random') handleGoalCount('random');

    setStartGame(true);
  };

  const handleClickEnrollLooser = () => {};

  if (isLoadingRoomInfo) return <Loading />;
  return (
    <>
      {!startGame ? (
        <div className={'wrapper'}>
          <div className={'member'}>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'참가자'}
            />
            <div className={'members-wrapper'}>
              {roomInfo?.memberList.map((member, index) => (
                <div key={`${member.nickname}_key_${index}`} className={'member-wrapper'}>
                  <Checkbox
                    defaultChecked
                    value={member.nickname}
                    onChange={(_e, checked) => handleChangeMemberList(member.nickname, checked)}
                  />
                  <Avatar {...stringAvatar(member.nickname)} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'세팅'}
            />
            <div className={'setting'}>
              <div className={'setting-count'}>
                <span>count</span>
                <input type={'number'} ref={countRef} defaultValue={10} />
              </div>
              <div className={'setting-weight'}>
                <span>weight</span>
                <input type={'number'} ref={weightRef} defaultValue={1} />
              </div>
              <div className={'setting-goal'}>
                <span>goal</span>
                <RadioGroup onChange={(_e, value) => handleChangeGoalType(value as GoalType)} defaultValue={goalType}>
                  {(['random', 'first', 'last'] as GoalType[]).map((item, idx) => {
                    return (
                      <FormControlLabel
                        control={<Radio />}
                        defaultChecked={item === goalType}
                        key={`${item}_key_${idx}`}
                        value={item}
                        label={item}
                        name={item}
                      />
                    );
                  })}
                </RadioGroup>
              </div>
            </div>
          </div>
          <div>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'시작'}
            />
            <div className={'button-wrapper'}>
              <Button color={'secondary'} variant={'contained'} onClick={handleClickStartGame}>
                Start
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <iframe
            // https://brady-man-847.github.io/roulette/
            src={`http://localhost:1234?users=${memberList.map((i) => encodeURI(i)).join(',')}&count=${countRef.current?.value}&weight=${
              weightRef.current?.value
            }&goal=${goalCount}&room=${roomSn}&token=${getCookie(ACCESS_TOKEN)}`}
            width={'100%'}
            height={'444px'}
            title={'brady-roulette'}
          />
          {/* <Button onClick={handleClickEnrollLooser}>결제 ㄱㄱ</Button> */}
        </>
      )}

      <style jsx>
        {`
          .wrapper {
            padding: 16px;
          }

          .member {
          }

          .members-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1vw;
            padding: 2vw;
          }

          .member-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4px;
            width: fit-content;
          }

          .setting {
            padding: 2vw;
            display: flex;
            flex-direction: column;
            gap: 4px;

            & div {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              & input[type='number'] {
                text-align: right;
              }
            }
          }

          .button-wrapper {
            display: flex;
            flex-direction: row-reverse;
          }
        `}
      </style>
    </>
  );
}
