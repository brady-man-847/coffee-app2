import { useRouter } from 'next/router';

export default function useOpenRoomDetail() {
  const router = useRouter();
  const handleOpenRoom = (roomSn: number) => {
    router.push(`/room/${roomSn}`);
  };
  return { handleOpenRoom };
}
