import { useQuery } from '@tanstack/react-query';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { OrderGetMenuInfo } from '@/apis';

type Request = { menuCode: string };

type Response = OrderGetMenuInfo;

type Params = UseQueryParams<Response, ErrorResponse, Request>;

function useQueryGetMenuInfo(params: Params) {
  const {
    req: { menuCode },
    queryOption,
  } = params;

  return useQuery({
    queryKey: ['order', 'menu', menuCode],
    queryFn: async () => (await mcafe.getMenuInfo(menuCode)).data,
    ...queryOption,
  });
}

export default useQueryGetMenuInfo;
