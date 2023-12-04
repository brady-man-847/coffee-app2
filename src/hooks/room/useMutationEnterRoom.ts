import { UseMutationParams } from '@/defines/reactQuery';
import { mcafe } from '@/factory/mcafeApi';
import { useMutation } from '@tanstack/react-query';
import { RoomRequestEnterRoom } from '@/apis';
import { ErrorResponse } from '@/defines/errorResponse';

type Request = {
  roomSn: number;
  roomRequestEnterRoom: RoomRequestEnterRoom;
};

type Response = boolean;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationEnterRoom(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async ({ roomSn, roomRequestEnterRoom }: Request) => (await mcafe.enterRoom(roomSn, roomRequestEnterRoom)).data,
    ...mutationOption,
  });
}

export default useMutationEnterRoom;
