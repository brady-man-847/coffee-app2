import MenuCategory from '@/components/menu/category/MenuCategory';
import MenuOptionDrawer from '@/components/menu/drawer/MenuOptionDrawer';
import { useRecoilState } from 'recoil';
import { roomStore } from '@/stores/roomStore';
import RoomChooseModal from '@/components/room/choose/RoomChooseModal';

export default function MenuScreen() {
  const [{ isOpen, modalType }] = useRecoilState(roomStore);
  return (
    <>
      <MenuCategory />
      <MenuOptionDrawer />
      {isOpen && modalType === 'entered' && <RoomChooseModal />}
    </>
  );
}
