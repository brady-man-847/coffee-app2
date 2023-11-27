import { useMutation } from '@tanstack/react-query';
import { UseMutationParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { MemberRequestLogin, MemberResponseLogin } from '@/apis';

type Request = MemberRequestLogin;

type Response = MemberResponseLogin;

export type UseMutationLoginParams = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationLogin(params: UseMutationLoginParams) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.login(req)).data,
    ...mutationOption,
  });
}

export default useMutationLogin;
