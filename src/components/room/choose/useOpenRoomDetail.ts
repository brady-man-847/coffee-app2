import { useRouter } from 'next/router';

export default function useOpenRoomDetail() {
  const router = useRouter();
  const handleClick = (roomSn: number) => {
    router.push(`/room/${roomSn}`);
  };
  return { handleClick };
}
