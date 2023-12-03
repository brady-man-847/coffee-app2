import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { axiosInstance } from '@/factory/axiosInstances';
import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/defines/token';
import { removeCookie } from '@/utils/cookie';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}
export default function WithAxios({ children }: Props) {
  const router = useRouter();

  const axiosInstances = [axiosInstance];

  const refreshTokenPromise = useRef<Promise<void> | null>(null);

  const requestRefreshToken = async (config: AxiosRequestConfig, error: AxiosError) => {
    if (!refreshTokenPromise.current) {
      // TODO @brady refresh api 완성 후 진행.
      // refreshTokenPromise.current = setAccessTokenByRefreshToken();
    }

    try {
      await refreshTokenPromise.current;

      refreshTokenPromise.current = null;

      return await axiosInstance(config);
    } catch {
      refreshTokenPromise.current = null;

      return Promise.reject(error);
    }
  };

  const setReqInterceptor = useCallback(() => {
    axiosInstances.map((instance) =>
      instance.interceptors.request.use(async (config) => {
        if (refreshTokenPromise.current) {
          await refreshTokenPromise.current;
        }

        const accessToken = getCookie(ACCESS_TOKEN);
        if (accessToken) {
          return {
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${accessToken}`,
            } as AxiosRequestHeaders,
          };
        }

        return config;
      }),
    );
  }, [axiosInstances]);

  const setResInterceptor = useCallback(() => {
    axiosInstances.map((instance) =>
      instance.interceptors.response.use(
        (value) => value,
        async (error: AxiosError) => {
          const { config, code, request, response, isAxiosError, status, cause } = error;

          console.log({ config, code, request, response, isAxiosError, status, cause });

          const accessToken = getCookie(ACCESS_TOKEN);
          // const refreshToken = getCookie(REFRESH_TOKEN);

          // AT가 없고, RT가 있을 때.
          // if (!accessToken && refreshToken && response?.status === StatusCodes.UNAUTHORIZED) {
          //   return requestRefreshToken(config, error);
          // }

          // AT랑 RT 모두 없을 때.
          // if (!accessToken && !refreshToken && response?.status === StatusCodes.UNAUTHORIZED) {
          //   const { pathname, search } = window.location;
          //   const encodedPathAndQueries = encodeURIComponent(pathname + search);
          //
          //   await router.push(`${MEMBERS_SERVICE_URL}/login?redirect=${encodeURIComponent(MWORKS_URL as string)}${encodedPathAndQueries}`);
          //
          //   return Promise.reject(error);
          // }
          removeCookie(ACCESS_TOKEN);
          router.push(RouterPath.LOGIN);
          return Promise.reject(error);
        },
      ),
    );
  }, [axiosInstances]);

  useEffect(() => {
    setReqInterceptor();
    setResInterceptor();
  }, [axiosInstances]);

  return <>{children}</>;
}
