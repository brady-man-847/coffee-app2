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
        }}
      >
        <LogoIcon />
        <Typography color={theme.palette.error.main}>MIDAS COFFEE IS GOD</Typography>
      </Toolbar>
    </AppBar>
  );
}
