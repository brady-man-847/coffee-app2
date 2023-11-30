import MenuScreen from '@/components/menu/MenuScreen';
import { withGetLoginGuardMidasWorkspaceServerSideProps } from '@/server/authGuard';

export default function MenuPage() {
  return <MenuScreen />;
}

export const getServerSideProps = withGetLoginGuardMidasWorkspaceServerSideProps();
