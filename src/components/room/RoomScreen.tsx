import RoomContainer from '@/components/room/choose/RoomContainer';
import useOpenRoomDetail from '@/components/room/choose/useOpenRoomDetail';
import RoomCreateDial from '@/components/room/action/RoomCreateDial';
import useQueryGetRoomList from '@/hooks/room/useQueryGetRoomList';
import { Loading } from '@/components/common';
import useMutationEnterRoom from '@/hooks/room/useMutationEnterRoom';
import useQueryGetRoomEntered from '@/hooks/room/useQueryGetRoomEntered';
import { RoomDtoStatusEnum } from '@/apis';

export default function RoomScreen() {
  const { data: { roomList: enteredRoomList } = {} } = useQueryGetRoomEntered({ req: undefined });
  const { data: { roomList } = {}, isLoading } = useQueryGetRoomList({ req: undefined });

  const { mutate: enterRoom } = useMutationEnterRoom({});
  const { handleOpenRoom } = useOpenRoomDetail();

  const handleClickRoomList = (roomSn: number, status?: RoomDtoStatusEnum) => {
    const isRoomEntered = Boolean(enteredRoomList?.find((i) => i.sn === roomSn));

    if (isRoomEntered) {
      handleOpenRoom(roomSn);
      return;
    }

    let password: string | undefined;
    if (status === RoomDtoStatusEnum.PRIVATE) {
      password = window.prompt('비밀번호를 입력하세요') || undefined;
    }

    enterRoom(
      { roomSn, roomRequestEnterRoom: { password } },
      {
        onSuccess: () => {
          handleOpenRoom(roomSn);
        },
        onError: (error) => {
          window.alert(error.message);
        },
      },
    );
  };

  return (
    <>
      <div className={'wrapper'}>
        {isLoading && <Loading />}
        {enteredRoomList && roomList && <RoomContainer onClick={handleClickRoomList} data={roomList} />}
        <RoomCreateDial />
      </div>

      <style jsx>{`
        .wrapper {
          height: 100%;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
