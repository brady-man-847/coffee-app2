import { Button } from '@mui/material';
import { removeCookie } from '@/utils/cookie';
import { ACCESS_TOKEN } from '@/defines/token';
import { RouterPath } from '@/defines/routerPath';
import { useRouter } from 'next/router';

export default function SettingScreen() {
  const router = useRouter();
  const handleClickLogout = () => {
    removeCookie(ACCESS_TOKEN);
    router.push(RouterPath.LOGIN);
  };

  return (
    <>
      <Button variant={'contained'} color={'error'} onClick={handleClickLogout}>
        LOG OUT
      </Button>
      <style jsx>{``}</style>
    </>
  );
}
