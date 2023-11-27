import MenuScreen from '@/screen/menu/MenuScreen';
import { MenuContext, useMenuValue } from '@/context/menu/MenuContext';
import { withGetLoginGuardMidasWorkspaceServerSideProps } from '@/server/authGuard';

export default function MenuPage() {
  return (
    <MenuContext.Provider value={useMenuValue()}>
      <MenuScreen />
    </MenuContext.Provider>
  );
}

export const getServerSideProps = withGetLoginGuardMidasWorkspaceServerSideProps();
