import MenuScreen from '@/screen/menu/MenuScreen';
import { MenuContext, useMenuValue } from '@/context/menu/MenuContext';

export default function MenuPage() {
  return (
    <MenuContext.Provider value={useMenuValue()}>
      <MenuScreen />
    </MenuContext.Provider>
  );
}
