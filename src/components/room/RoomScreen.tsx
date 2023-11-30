import RoomContainer from '@/components/room/choose/RoomContainer';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';
import RoomCreateDial from '@/components/room/action/RoomCreateDial';

export default function RoomScreen() {
  const { handleClick } = useOpenRoomDetail();
  return (
    <>
      <div className={'wrapper'}>
        <RoomContainer onClick={handleClick} />
        <RoomCreateDial />
      </div>
      <style jsx>{`
        .wrapper {
          height: 100%;
        }
      `}</style>
    </>
  );
}
