import useQueryGetRoomEntered from '@/hooks/room/useQueryGetRoomEntered';
import { Paper, Table, TableContainer } from '@mui/material';
import { Loading } from '@/components/common';
import RoomTableCard from '@/components/room/choose/RoomTableCard';

interface Props {
  onClick?: (roomSn: number) => void;
}

export default function RoomContainer({ onClick }: Props) {
  const { data, isLoading } = useQueryGetRoomEntered({ req: undefined });

  if (isLoading) return <Loading />;

  return (
    <>
      <div className={'wrapper'}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 'fit-content', gap: 1 }}>
            {data?.roomList && data.roomList.map((room) => <RoomTableCard data={room} key={`${room.sn}_card_key`} onClick={onClick} />)}
          </Table>
        </TableContainer>
      </div>
      <style jsx>{`
        .wrapper {
          height: 100%;
          width: 100%;
          padding: 16px 0;
        }
      `}</style>
    </>
  );
}