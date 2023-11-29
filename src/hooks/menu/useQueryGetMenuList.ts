import { UseQueryParams } from '@/defines/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { OrderGetMenuList } from '@/apis';

type Request = undefined;

type Response = OrderGetMenuList;

type Params = UseQueryParams<Response, ErrorResponse, Request>;

function useQueryGetMenuList(params: Params) {
  const { queryOption } = params;

  return useQuery({
    queryKey: ['order', 'menu'],
    queryFn: async () => (await mcafe.getMenuList()).data,
    ...queryOption,
  });
}

export default useQueryGetMenuList;
