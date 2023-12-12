import * as React from 'react';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomCreateModal from '@/components/room/action/RoomCreateModal';

export default function RoomCreateDial() {
  const [{ isOpen }, dispatch] = useRecoilState(roomStore);

  const handleClick = () => dispatch({ isOpen: true });

  return (
    <>
      <Button sx={{ height: 32, width: '100%' }} color="secondary" variant={'contained'} onClick={handleClick}>
        + 방 만들기
      </Button>
      {isOpen && <RoomCreateModal />}
    </>
  );
}
