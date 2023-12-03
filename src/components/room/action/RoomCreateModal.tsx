import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomCreateForm from '@/components/room/action/RoomCreateForm';

export default function RoomCreateModal() {
  const [{ isOpen }, dispatch] = useRecoilState(roomStore);
  const handleClose = () => dispatch({ isOpen: false });

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>Create Room</Box>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <RoomCreateForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <style jsx>{``}</style>
    </>
  );
}
