import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { OrderResponsePay, PaymentRequestPay } from '@/apis';

type Request = PaymentRequestPay;

type Response = OrderResponsePay;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationPayment(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.payOrder(req)).data,
    ...mutationOption,
  });
}

export default useMutationPayment;
