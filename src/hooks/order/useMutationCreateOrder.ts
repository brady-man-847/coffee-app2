import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { OrderRequestCreate, OrderResponseCreate } from '@/apis';

type Request = OrderRequestCreate;

type Response = OrderResponseCreate;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationCreateOrder(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.createOrder(req)).data,
    ...mutationOption,
  });
}

export default useMutationCreateOrder;
