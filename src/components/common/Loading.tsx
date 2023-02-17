import { LinearProgress } from '@mui/material';

export default function Loading() {
  return (
    <LinearProgress
      sx={{
        background: 'linear-gradient(to right, #6fcbb6, #9c64f4)',
        '> span': { backgroundColor: 'primary' },
      }}
    />
  );
}
