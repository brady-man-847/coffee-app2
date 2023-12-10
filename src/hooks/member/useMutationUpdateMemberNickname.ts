import { useMutation } from '@tanstack/react-query';
import { mcafe } from '@/factory/mcafeApi';
import { MemberRequestNickname, MemberResponseResult } from '@/apis';
import { UseMutationParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';

type Request = MemberRequestNickname;

type Response = MemberResponseResult;

type Params = UseMutationParams<Response, ErrorResponse, Request>;

function useMutationUpdateMemberNickname(params: Params) {
  const { mutationOption } = params;

  return useMutation({
    mutationKey: [],
    mutationFn: async (req: Request) => (await mcafe.updateNickname(req)).data,
    ...mutationOption,
  });
}

export default useMutationUpdateMemberNickname;
