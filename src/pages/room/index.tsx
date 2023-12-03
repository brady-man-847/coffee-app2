import RoomScreen from '@/components/room/RoomScreen';
import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';

export default function RoomPage() {
  useCheckHasAuth({});

  return <RoomScreen />;
}
