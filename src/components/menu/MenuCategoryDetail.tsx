import { Box, Paper, Typography } from '@mui/material';
import { MenuRs } from '@/dto/menuDto';
import { useContextSelector } from 'use-context-selector';
import { MenuContext } from '@/context/menu/MenuContext';

interface Props {
  data?: MenuRs[];
}

export default function MenuCategoryDetail({ data }: Props) {
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);

  const onClick = (item: MenuRs) => {
    dispatch({ type: 'SET_DRAWER_OPEN', isDrawerOpen: true });
    dispatch({ type: 'SET_MENU', menu: item });
  };

  return (
    <Box>
      {data?.map((item) => (
        <Paper
          elevation={3}
          onClick={() => onClick(item)}
          sx={[
            {
              p: 1,
            },
            (theme) => ({
              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.contrastText,
                cursor: 'pointer',
              },
            }),
          ]}
        >
          <Typography>{item.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
}
