import { useQuery } from '@tanstack/react-query';
import { mcafe } from '@/factory/mcafeApi';
import { RoomResponseGetRoomList } from '@/apis';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';

type Response = RoomResponseGetRoomList;

type Params = UseQueryParams<Response, ErrorResponse>;

export const useQueryGetRoomListKey = ['room', 'get', 'list'];

function useQueryGetRoomList(params: Params) {
  const { queryOption } = params;

  return useQuery({
    queryKey: useQueryGetRoomListKey,
    queryFn: async () => (await mcafe.getRoomList()).data,
    ...queryOption,
  });
}

export default useQueryGetRoomList;
