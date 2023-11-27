import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export const QUERY_COMMON_STALE_TIME = 1000 * 20;

export interface UseQueryParams<FnRes, Error, Req = undefined, QueryRes = FnRes> {
  req: Req;
  queryOption?: UseQueryOptions<FnRes, Error, QueryRes>;
}

export interface UseInfiniteQueryParams<FnRes, Error, Req = undefined, QueryRes = FnRes> {
  req: Req;
  queryOption?: UseInfiniteQueryOptions<FnRes, Error, QueryRes>;
}

export interface UseMutationParams<Res, Error, Req> {
  mutationOption?: UseMutationOptions<Res, Error, Req>;
}
