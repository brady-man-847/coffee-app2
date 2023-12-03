import { useQuery } from '@tanstack/react-query';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { RoomResponseGetRoomList } from '@/apis';

type Response = RoomResponseGetRoomList;

type Params = UseQueryParams<Response, ErrorResponse>;

function useQueryGetRoomEntered(params: Params) {
  const { queryOption } = params;

  return useQuery({
    queryKey: ['room', 'get', 'entered'],
    queryFn: async () => (await mcafe.getEnteredRoomList()).data,
    ...queryOption,
  });
}

export default useQueryGetRoomEntered;
