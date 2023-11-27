import { UseMutationParams } from '@/defines/reactQuery';
import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { MemberRequestSignup, MemberResponseResult } from '@/apis';

type Request = MemberRequestSignup;

type Response = MemberResponseResult;

export type UseMutationSignUpParams = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationSignUp(params: UseMutationSignUpParams) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: async (req: Request) => (await mcafe.signup(req)).data,
    ...mutationOption,
  });
}

export default useMutationSignUp;
