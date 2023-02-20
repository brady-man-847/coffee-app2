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

export const BOTTOM_HEIGHT = 65;

export default function () {
  const router = useRouter();
  return (
    <>
      <Bottom height={BOTTOM_HEIGHT}>
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
      </Bottom>
    </>
  );
}

const Bottom = styled(Paper)<{ height: number }>`
  position: fixed;
  bottom: 0;
  width: inherit;
  height: ${(props) => props.height}px;
`;
