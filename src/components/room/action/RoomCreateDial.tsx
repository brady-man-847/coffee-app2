import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LiquorIcon from '@mui/icons-material/Liquor';

export default function RoomCreateDial() {
  const actions = [{ icon: <LiquorIcon />, name: 'Create', onClick: () => {} }];

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.onClick} />
        ))}
      </SpeedDial>
    </Box>
  );
}
