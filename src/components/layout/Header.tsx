import { theme } from '@/config';
import LogoIcon from '@/icon/LogoIcon';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const HEADER_HEIGHT = 65;

export default function () {
  return (
    <AppBar
      color={'primary'}
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        width: 'inherit',
        height: HEADER_HEIGHT,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <LogoIcon />
        <Typography color={theme.palette.error.main}>MIDAS COFFEE IS GOD</Typography>
      </Toolbar>
    </AppBar>
  );
}
