import * as React from 'react';
import { Box, Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomCreateModal from '@/components/room/action/RoomCreateModal';
import SearchIcon from '@mui/icons-material/Search';
import RoomSearchModal from '@/components/room/choose/RoomSearchModal';

export default function RoomCreateDial() {
  const [{ isOpen, modalType }, dispatch] = useRecoilState(roomStore);

  const handleClickCreate = () => dispatch({ isOpen: true, modalType: 'create' });
  const handleClickSearch = () => dispatch({ isOpen: true, modalType: 'search' });

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, padding: 1 }}>
        <Button sx={{ height: 32, flex: 1 }} color="primary" variant={'contained'} onClick={handleClickSearch}>
          <SearchIcon /> 방 찾기
        </Button>
        <Button sx={{ height: 32, flex: 1 }} color="secondary" variant={'contained'} onClick={handleClickCreate}>
          + 방 만들기
        </Button>
      </Box>

      {isOpen && modalType === 'create' && <RoomCreateModal />}
      {isOpen && modalType === 'search' && <RoomSearchModal />}
    </>
  );
}
