import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomContainer from '@/components/room/choose/RoomContainer';

export default function RoomModal() {
  const [{ isOpen }, setRoomState] = useRecoilState(roomStore);

  const handleClose = () => {
    setRoomState({ isOpen: false });
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} fullScreen>
        <DialogTitle>Room</DialogTitle>

        <DialogContent>
          <RoomContainer />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color={'secondary'} onClick={handleClose} autoFocus>
            Order
          </Button>
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
