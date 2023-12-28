import styled from '@emotion/styled';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsIcon from '@mui/icons-material/Settings';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import FireplaceIcon from '@mui/icons-material/Fireplace';

enum BottomMenu {
  MENU = '/menu',
  ROOM = '/room',
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
          <BottomNavigationAction value={BottomMenu.MENU} label="MENU" icon={<CoffeeIcon />} />
          <BottomNavigationAction value={BottomMenu.ROOM} label="ROOM" icon={<FireplaceIcon />} />
          <BottomNavigationAction value={BottomMenu.ORDER} label="ORDER" icon={<LocalAtmIcon />} />
          <BottomNavigationAction value={BottomMenu.SETTING} label="SETTING" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Bottom>
    </>
  );
}

const Bottom = styled(Paper)<{ height: number }>`
  //position: fixed;
  //bottom: 0;
  width: inherit;
  //max-width: 500px;
  height: ${(props) => props.height}px;
`;
