import { Paper, Table, TableContainer } from '@mui/material';
import RoomTableCard from '@/components/room/choose/RoomTableCard';
import { RoomDto, RoomDtoStatusEnum } from '@/apis';

interface Props {
  data: RoomDto[];
  onClick?: (roomSn: number, status?: RoomDtoStatusEnum) => void;
}

export default function RoomContainer({ data, onClick }: Props) {
  return (
    <>
      <div className={'wrapper'}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 'fit-content', gap: 1 }}>
            {data && data.map((room) => <RoomTableCard data={room} key={`${room.sn}_card_key`} onClick={onClick} />)}
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
