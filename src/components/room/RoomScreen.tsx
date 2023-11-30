import RoomContainer from '@/components/room/choose/RoomContainer';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';

export default function RoomScreen() {
  const { handleClick } = useOpenRoomDetail();
  return (
    <>
      <div className={'wrapper'}>
        <RoomContainer onClick={handleClick} />
      </div>
      <style jsx>{`
        .wrapper {
          height: 100%;
        }
      `}</style>
    </>
  );
}
