import RoomContainer from '@/components/room/choose/RoomContainer';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';
import RoomCreateDial from '@/components/room/action/RoomCreateDial';
import { Loading } from '@/components/common';
import useQueryGetRoomEntered from '@/hooks/room/useQueryGetRoomEntered';

export default function RoomScreen() {
  const { data: { roomList: enteredRoomList } = {}, isLoading } = useQueryGetRoomEntered({ req: undefined });

  const { handleOpenRoom } = useOpenRoomDetail();

  const handleClickRoomList = (roomSn: number) => handleOpenRoom(roomSn);

  return (
    <>
      <div className={'wrapper'}>
        {isLoading && <Loading />}
        <div className={'list-wrapper'}>
          <RoomCreateDial />
          {enteredRoomList && <RoomContainer onClick={handleClickRoomList} data={enteredRoomList} />}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 100%;
          overflow: hidden;
        }
        .list-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          overflow: auto;
        }
        @supports (-webkit-touch-callout: none) {
          .wrapper {
            height: available;
          }
        }
      `}</style>
    </>
  );
}
