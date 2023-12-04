import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RouterPath } from '@/defines/routerPath';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(RouterPath.MENU);
  });

  return <></>;
}
