import MenuScreen from '@/components/menu/MenuScreen';
import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';

export default function MenuPage() {
  useCheckHasAuth({});
  return <MenuScreen />;
}
