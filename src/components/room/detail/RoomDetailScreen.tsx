import { useRouter } from 'next/router';
import useQueryGetRoomInfo from '@/hooks/room/useQueryGetRoomInfo';
import { Avatar, Button, Typography } from '@mui/material';
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
    payment({ roomSn: Number(roomSn) });
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
          <div className={'order-wrapper'}>{/* {data} */}</div>
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
          }
          .avatar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 8px;
          }
          .room-wrapper {
            padding: 8px;
          }
          .payment-wrapper {
          }
        `}</style>
      </>
    );
  return <Loading />;
}
