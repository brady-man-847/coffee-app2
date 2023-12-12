import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';

type Request = {
  roomSn: number;
};

type Response = boolean;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationCloseRoom(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async ({ roomSn }: Request) => (await mcafe.deleteRoom(roomSn)).data,
    ...mutationOption,
  });
}

export default useMutationCloseRoom;
