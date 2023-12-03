import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RouterPath } from '@/defines/routerPath';

export default function Redirect404Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(RouterPath.LOGIN);
  });

  return null;
}
