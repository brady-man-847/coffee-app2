import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { RoomRequestUpdateRoom } from '@/apis';

type Request = RoomRequestUpdateRoom;

type Response = boolean;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationUpdateRoom(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.updateRoom(req)).data,
    ...mutationOption,
  });
}

export default useMutationUpdateRoom;
