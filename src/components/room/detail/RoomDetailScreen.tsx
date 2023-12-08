import { useRouter } from 'next/router';
import useQueryGetRoomInfo from '@/hooks/room/useQueryGetRoomInfo';
import { Avatar, Button, Chip, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/muiAvatar';
import { Loading } from '@/components/common';
import RoomDetailInfo from '@/components/room/detail/RoomDetailInfo';
import useMutationPayment from '@/hooks/payment/useMutationPayment';

export default function RoomDetailScreen() {
  const router = useRouter();
  const { roomSn } = router.query;

  const { data, isLoading } = useQueryGetRoomInfo({ req: { roomSn: Number(roomSn) } });
  const { mutate: payment } = useMutationPayment({});

  const handleClickPayment = () => {
    if (window.confirm(`방번호:${roomSn} 결제하시겠습니까?`)) {
      payment({ roomSn: Number(roomSn) });
    }
  };

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <div className={'wrapper'}>
          <Typography>ROOM INFO</Typography>
          <div className={'room-wrapper'}>
            <RoomDetailInfo data={data.room} />
          </div>

          <Typography color={'secondary'}>ROOM MEMBERS</Typography>
          <div className={'avatar-wrapper'}>
            {data?.memberList.map((member) => (
              <div className={'avatar'} key={`${member.memberSn}_member_key`}>
                <Avatar {...stringAvatar(member.nickname)} />
                <div>{member.nickname}</div>
              </div>
            ))}
          </div>
          <Typography>ORDER LIST</Typography>

          <div className={'order-wrapper'}>
            {data.orderList.map((order) => {
              const { menu, optionList, memberNickname, memberSn } = order;
              const { name: menuName, optionGroupList } = menu;
              const includeOptionList = optionGroupList.flatMap((i) => i.optionList).filter((j) => optionList.includes(j.code));
              return (
                <div className={'order-item'} key={`${order.memberSn}_order_item`}>
                  <Avatar {...stringAvatar(memberNickname)} />
                  <div>
                    <Chip
                      sx={{
                        height: 'auto',
                        '& .MuiChip-label': {
                          display: 'block',
                          whiteSpace: 'normal',
                        },
                      }}
                      label={menuName}
                    />
                    {includeOptionList.map((i) => (
                      <Chip
                        key={`${memberSn}_${i.code}_option`}
                        sx={{
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                          },
                        }}
                        label={i.name}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={'payment-wrapper'} onClick={handleClickPayment}>
            <Button variant="contained">결제하기</Button>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
          }

          .avatar-wrapper {
            display: flex;
            flex-direction: row;
            gap: 8px;
            width: 100%;
            overflow: auto;
          }

          .avatar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 8px;
            font-size: 0.8rem;
          }

          .room-wrapper {
            padding: 8px;
          }

          .order-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            border: 1px solid lightgray;
          }

          .payment-wrapper {
          }
        `}</style>
      </>
    );
  return <Loading />;
}
