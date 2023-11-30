import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomContainer from '@/components/room/choose/RoomContainer';
import CloseIcon from '@mui/icons-material/Close';
import useCreateOrder from '@/components/room/choose/useCreateOrder';

export default function RoomModalForOrder() {
  const [{ isOpen }, setRoomState] = useRecoilState(roomStore);

  const handleClose = () => setRoomState({ isOpen: false });
  const { handleClick } = useCreateOrder();

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} fullScreen>
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
        <DialogContent>
          <RoomContainer onClick={handleClick} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <style jsx>{`
        :global(.MuiDialog-root) {
          margin: 8%;
        }
        :global(.MuiDialogContent-root) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
