import { RoomDto } from '@/apis';
import { Chip, TableCell, TableRow } from '@mui/material';

interface Props {
  data: RoomDto;
}
export default function RoomTableCard({ data }: Props) {
  const { sn, hostName, name, status } = data;

  const handleClickRow = () => {};

  return (
    <>
      <TableRow onClick={handleClickRow}>
        <TableCell>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              방번호: <Chip label={sn} />
            </div>
            <div>
              방장: <Chip label={hostName} />
            </div>
          </div>
          <div />
          <div>
            방이름: <Chip label={name} />
          </div>
          <div>
            방상태: <Chip label={status} />
          </div>
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
