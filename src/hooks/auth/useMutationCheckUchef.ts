import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { MemberRequestUcehfAuth, MemberResponseCertKey } from '@/apis';

type Request = MemberRequestUcehfAuth;

type Response = MemberResponseCertKey;

export type UseMutationCheckUchefParams = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationCheckUchef(params: UseMutationCheckUchefParams) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.uChefAuth(req)).data,
    ...mutationOption,
  });
}

export default useMutationCheckUchef;
