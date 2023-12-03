import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';

export default function HomePage() {
  useCheckHasAuth({ redirectPath: '/menu' });

  return <></>;
}
