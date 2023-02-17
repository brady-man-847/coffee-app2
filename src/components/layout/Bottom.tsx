import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

enum BottomMenu {
  MENU = '/menu',
  GAME = '/game',
  PAYMENT = '/payment',
  SETTING = '/setting',
  ORDER = '/order',
}

export default function Bottom() {
  const router = useRouter();
  return (
    <>
      <BottomBox>
        <BottomNavigation
          showLabels
          value={router.pathname}
          onChange={(event, newValue) => {
            router.push(newValue);
          }}
        >
          <BottomNavigationAction value={BottomMenu.MENU} label="메뉴" icon={<CoffeeIcon />} />
          <BottomNavigationAction value={BottomMenu.GAME} label="게임" icon={<SmartToyIcon />} />
          <BottomNavigationAction value={BottomMenu.ORDER} label="주문" icon={<LocalAtmIcon />} />
          <BottomNavigationAction value={BottomMenu.SETTING} label="설정" icon={<SettingsIcon />} />
        </BottomNavigation>
      </BottomBox>
    </>
  );
}

const BottomBox = styled(Paper)`
  position: absolute;
  bottom: 0;
  width: inherit;
`;
