import { theme } from '@/config';
import LogoIcon from '@/icon/LogoIcon';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function () {
  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar
        sx={{
          display: 'flex',
          gap: '8px',
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      >
        <LogoIcon />
        <Typography color={theme.palette.error.main}>MIDAS COFFEE IS GOD</Typography>
      </Toolbar>
    </AppBar>
  );
}
