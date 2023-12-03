import RoomContainer from '@/components/room/choose/RoomContainer';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';
import RoomCreateDial from '@/components/room/action/RoomCreateDial';
import useQueryGetRoomList from '@/hooks/room/useQueryGetRoomList';
import { Loading } from '@/components/common';

export default function RoomScreen() {
  const { handleClick } = useOpenRoomDetail();
  const { data, isLoading } = useQueryGetRoomList({ req: undefined });

  return (
    <>
      <div className={'wrapper'}>
        {isLoading && <Loading />}
        {data && <RoomContainer onClick={handleClick} data={data} />}
      </div>
      <RoomCreateDial />

      <style jsx>{`
        .wrapper {
          height: 100%;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
