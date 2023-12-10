import { Button, Chip } from '@mui/material';
import { removeCookie } from '@/utils/cookie';
import { ACCESS_TOKEN } from '@/defines/token';
import { RouterPath } from '@/defines/routerPath';
import { useRouter } from 'next/router';
import useQueryGetMember from '@/hooks/member/useQueryGetMember';
import { Loading } from '@/components/common';
import useMutationUpdateMemberNickname from '@/hooks/member/useMutationUpdateMemberNickname';

export default function SettingScreen() {
  const router = useRouter();
  const { data, isLoading, refetch: getMemberInfo } = useQueryGetMember({ req: undefined });
  const { mutate: updateMemberNickname } = useMutationUpdateMemberNickname({});

  const handleClickLogout = () => {
    removeCookie(ACCESS_TOKEN);
    router.push(RouterPath.LOGIN);
  };

  const handleClickNickname = () => {
    const nickname = window.prompt('닉네임을 바꾸시겠어요?') || undefined;
    if (!nickname) return;
    updateMemberNickname(
      { nickname },
      {
        onSuccess: () => {
          window.alert('닉네임이 변경되었습니다.');
          getMemberInfo();
        },
      },
    );
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <div className={'wrapper'}>
        <div className={'member-wrapper'}>
          <div className={'item-wrapper'}>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'id'}
            />
            {data?.username}
          </div>
          <div className={'item-wrapper'}>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'nickname'}
            />
            <span onClick={handleClickNickname} className={'nickname-item'}>
              {data?.nickname}
            </span>
          </div>
          <div className={'item-wrapper'}>
            <Chip
              sx={{
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
              label={'phone'}
            />
            {data?.phone}
          </div>
        </div>
        <Button variant={'contained'} color={'error'} onClick={handleClickLogout}>
          LOG OUT
        </Button>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 32px;
        }
        .member-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }
        .item-wrapper {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .nickname-item {
          cursor: pointer;
          transition: transform 0.2s; /* Animation */
        }
        .nickname-item:hover {
          background-color: #bdbdbd;
          border-radius: 4px;
          transform: scale(1.5);
        }
      `}</style>
    </>
  );
}
