import { Chip } from '@mui/material';
import { RoomDto } from '@/apis';
import useMutationUpdateRoom from '@/hooks/room/useMutationUpdateRoom';
import useQueryGetMember from '@/hooks/member/useQueryGetMember';

interface Props {
  data: RoomDto;
}
export default function RoomDetailInfo({ data }: Props) {
  const { sn, hostName, name, status } = data;

  const { mutate: updateRoomName } = useMutationUpdateRoom({});
  const { data: userInfo } = useQueryGetMember({ req: undefined });

  const handleClickChangeRoomName = () => {
    if (hostName !== userInfo?.nickname) return;

    const newName = window.prompt('변경할 방이름을 입력하세요.', name);
    if (newName) {
      updateRoomName(
        { roomSn: sn, name: newName },
        {
          onSuccess: () => {
            window.alert('방이름이 변경되었습니다.');
          },
          onError: (error) => {
            window.alert(error.message);
          },
        },
      );
    }
  };

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
        <div onClick={handleClickChangeRoomName}>
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
