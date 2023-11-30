import { useQuery } from '@tanstack/react-query';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/errorResponse';
import { mcafe } from '@/factory/mcafeApi';
import { RoomResponseGetRoomInfo } from '@/apis';

type Request = {
  roomSn: number;
};

type Response = RoomResponseGetRoomInfo;

type Params = UseQueryParams<Response, ErrorResponse, Request>;

function useQueryGetRoomInfo(params: Params) {
  const {
    req: { roomSn },
    queryOption,
  } = params;

  return useQuery({
    queryKey: ['room', 'get', roomSn],
    queryFn: async () => (await mcafe.getRoomInfo(roomSn)).data,
    ...queryOption,
  });
}

export default useQueryGetRoomInfo;
