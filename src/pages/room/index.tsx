import RoomScreen from '@/components/room/RoomScreen';
import { withGetLoginGuardMidasWorkspaceServerSideProps } from '@/server/authGuard';

export default function RoomPage() {
  return <RoomScreen />;
}

export const getServerSideProps = withGetLoginGuardMidasWorkspaceServerSideProps();
