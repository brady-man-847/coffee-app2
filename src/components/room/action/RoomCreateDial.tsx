import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomCreateModal from '@/components/room/action/RoomCreateModal';
import { BOTTOM_HEIGHT } from '@/components/layout/Bottom';

export default function RoomCreateDial() {
  const [{ isOpen }, dispatch] = useRecoilState(roomStore);

  const handleClick = () => dispatch({ isOpen: true });

  return (
    <>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, bottom: BOTTOM_HEIGHT }}>
        <Button
          sx={{ position: 'absolute', bottom: 16, right: 16, borderRadius: 32, height: 64, width: 64 }}
          color="primary"
          variant={'contained'}
          onClick={handleClick}
        >
          <SpeedDialIcon />
        </Button>
      </Box>
      {isOpen && <RoomCreateModal />}
    </>
  );
}
