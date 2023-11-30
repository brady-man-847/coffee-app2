import { withGetLoginGuardMidasWorkspaceServerSideProps } from '@/server/authGuard';
import RoomDetailScreen from '@/components/room/detail/RoomDetailScreen';

export default function RoomDetailPage() {
  return <RoomDetailScreen />;
}

export const getServerSideProps = withGetLoginGuardMidasWorkspaceServerSideProps();
