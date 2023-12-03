import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomContainer from '@/components/room/choose/RoomContainer';
import CloseIcon from '@mui/icons-material/Close';
import useCreateOrder from '@/components/room/choose/useCreateOrder';
import useQueryGetRoomEntered from '@/hooks/room/useQueryGetRoomEntered';
import { Loading } from '@/components/common';

export default function RoomChooseModal() {
  const [{ isOpen }, setRoomState] = useRecoilState(roomStore);
  const { data, isLoading } = useQueryGetRoomEntered({ req: undefined });

  const handleClose = () => setRoomState({ isOpen: false });
  const { handleClick } = useCreateOrder();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minHeight: '50vh',
            minWidth: '500px',
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
        <DialogContent>{data && <RoomContainer onClick={handleClick} data={data} />}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <style jsx>{``}</style>
    </>
  );
}
