import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar>
        <Typography>안녕하세요</Typography>
      </Toolbar>
    </AppBar>
  );
}
