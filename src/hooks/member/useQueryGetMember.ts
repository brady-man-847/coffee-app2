import { mcafe } from '@/factory/mcafeApi';
import { MemberResponseResult } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';

type Response = MemberResponseResult;

type Params = UseQueryParams<Response, ErrorResponse>;

function useQueryGetMember(params: Params) {
  const { req, queryOption } = params;

  return useQuery({
    queryKey: [],
    queryFn: async () => (await mcafe.findMemberInfo()).data,
    ...queryOption,
  });
}

export default useQueryGetMember;
