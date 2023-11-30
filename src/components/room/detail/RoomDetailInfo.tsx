import { Chip } from '@mui/material';
import { RoomDto } from '@/apis';

interface Props {
  data: RoomDto;
}
export default function RoomDetailInfo({ data }: Props) {
  const { sn, hostName, name, status } = data;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          방번호:{' '}
          <Chip
            sx={{
              height: 'auto',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
              },
            }}
            label={sn}
          />
        </div>
        <div>
          방장:{' '}
          <Chip
            sx={{
              height: 'auto',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
              },
            }}
            label={hostName}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          방이름:
          <Chip
            sx={{
              height: 'auto',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
              },
            }}
            label={name}
          />
        </div>
        <div>
          방상태:
          <Chip
            sx={{
              height: 'auto',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
              },
            }}
            label={status}
          />
        </div>
      </div>
    </>
  );
}
