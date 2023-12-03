import RoomDetailScreen from '@/components/room/detail/RoomDetailScreen';
import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';

export default function RoomDetailPage() {
  useCheckHasAuth({});

  return <RoomDetailScreen />;
}
