import SettingScreen from '@/components/setting/SettingScreen';
import useCheckHasAuth from '@/hooks/auth/useCheckHasAuth';

export default function SettingPage() {
  useCheckHasAuth({});
  return <SettingScreen />;
}
