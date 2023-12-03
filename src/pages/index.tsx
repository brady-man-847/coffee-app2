import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';
import { RouterPath } from '@/defines/routerPath';

export default function HomePage() {
  useCheckHasAuth({ redirectPath: RouterPath.MENU });

  return <></>;
}
