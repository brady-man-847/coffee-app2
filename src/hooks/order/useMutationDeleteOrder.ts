import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';

type Request = {
  roomSn: number;
  orderSn: number;
};

type Response = boolean;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationDeleteOrder(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async ({ roomSn, orderSn }: Request) => (await mcafe.deleteOrder(roomSn, orderSn)).data,
    ...mutationOption,
  });
}

export default useMutationDeleteOrder;
