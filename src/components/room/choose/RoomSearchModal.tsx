import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomContainer from '@/components/room/choose/RoomContainer';
import CloseIcon from '@mui/icons-material/Close';
import { Loading } from '@/components/common';
import useQueryGetRoomList from '@/hooks/room/useQueryGetRoomList';
import useMutationEnterRoom from '@/hooks/room/useMutationEnterRoom';
import { RoomDtoStatusEnum } from '@/apis';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';
import useQueryGetRoomEntered from '@/hooks/room/useQueryGetRoomEntered';

export default function RoomSearchModal() {
  const [{ isOpen }, setRoomState] = useRecoilState(roomStore);

  const { data: { roomList: enteredRoomList } = {} } = useQueryGetRoomEntered({ req: undefined });
  const { data: { roomList } = {}, isLoading } = useQueryGetRoomList({ req: undefined });

  const { mutate: enterRoom } = useMutationEnterRoom({});
  const { handleOpenRoom } = useOpenRoomDetail();

  const handleClose = () => setRoomState({ isOpen: false, modalType: 'none' });

  const handleClickRoomList = (roomSn: number, status?: RoomDtoStatusEnum) => {
    const isRoomEntered = Boolean(enteredRoomList?.find((i) => i.sn === roomSn));

    if (isRoomEntered) {
      handleOpenRoom(roomSn);
      return;
    }

    let password: string | undefined;
    if (status === RoomDtoStatusEnum.PRIVATE) {
      password = window.prompt('비밀번호를 입력하세요') ?? undefined;
      if (!password) return;
    }

    if (window.confirm('입장하시겠습니까?')) {
      enterRoom(
        { roomSn, roomRequestEnterRoom: { password } },
        {
          onSuccess: () => {
            handleOpenRoom(roomSn);
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
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minHeight: '50vh',
          },
        }}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>Room</Box>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        {isLoading && <Loading />}
        <DialogContent>{roomList && <RoomContainer onClick={handleClickRoomList} data={roomList} />}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <style jsx>{``}</style>
    </>
  );
}
