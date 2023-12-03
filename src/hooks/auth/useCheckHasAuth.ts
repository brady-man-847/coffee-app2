import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/defines/token';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RouterPath } from '@/defines/routerPath';

interface Props {
  redirectPath?: RouterPath;
}

export default function useCheckHasAuth({ redirectPath }: Props) {
  const router = useRouter();
  const accessToken = getCookie(ACCESS_TOKEN);

  useEffect(() => {
    const hasAuth = !!accessToken;

    if (!hasAuth) router.push(RouterPath.LOGIN);
    else if (redirectPath) router.push(redirectPath);
  }, [accessToken]);
}
