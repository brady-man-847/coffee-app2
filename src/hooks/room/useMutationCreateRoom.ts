import { mcafe } from '@/factory/mcafeApi';
import { RoomRequestCreate, RoomResponseCreate } from '@/apis';
import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';

type Request = RoomRequestCreate;

type Response = RoomResponseCreate;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationCreateRoom(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.createRoom(req)).data,
    ...mutationOption,
  });
}

export default useMutationCreateRoom;
