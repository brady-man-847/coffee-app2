import { RoomDto, RoomDtoStatusEnum } from '@/apis';
import { TableCell, TableRow } from '@mui/material';
import RoomDetailInfo from '@/components/room/detail/RoomDetailInfo';

interface Props {
  data: RoomDto;
  onClick?: (roomSn: number, status?: RoomDtoStatusEnum) => void;
}
export default function RoomTableCard({ data, onClick }: Props) {
  const { sn, status } = data;

  return (
    <>
      <TableRow onClick={() => onClick?.(sn, status)}>
        <TableCell>
          <RoomDetailInfo data={data} />
        </TableCell>
      </TableRow>
      <style jsx>
        {`
          :global(.MuiTableCell-root:hover) {
            cursor: pointer;
            background-color: #f5f5f5;
          }
        `}
      </style>
    </>
  );
}
