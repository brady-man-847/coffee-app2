import { theme } from '@/config';
import LogoIcon from '@/icon/LogoIcon';
import { Box, Toolbar, Typography } from '@mui/material';

export const HEADER_HEIGHT = 65;

export default function () {
  return (
    <Box
      color={'primary'}
      sx={{
        width: '100%',
        height: HEADER_HEIGHT,
        backgroundColor: theme.palette.primary.main,
        position: 'fixed',
        top: 0,
        flexGrow: 1,
        transform: 'translateZ(0px)',
        zIndex: 777,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          gap: '8px',
          minHeight: HEADER_HEIGHT,
        }}
      >
        <LogoIcon />
        <Typography color={theme.palette.error.main}>MIDAS COFFEE IS GOD</Typography>
      </Toolbar>
    </Box>
  );
}
