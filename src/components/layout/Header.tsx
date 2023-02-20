import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar>
        <Typography>COFFEE WORLD</Typography>
      </Toolbar>
    </AppBar>
  );
}
