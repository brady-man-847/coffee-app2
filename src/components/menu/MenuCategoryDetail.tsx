import { MenuContext } from '@/context/menu/MenuContext';
import { MenuRs } from '@/dto/menuDto';
import { Box, Paper, Typography } from '@mui/material';
import { useContextSelector } from 'use-context-selector';

interface Props {
  data?: MenuRs[];
}

export default function MenuCategoryDetail({ data }: Props) {
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);

  const onClick = (item: MenuRs) => {
    if (item.stock !== 0) {
      dispatch({ type: 'SET_DRAWER_OPEN', isDrawerOpen: true });
      dispatch({ type: 'SET_MENU', menu: item });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
      }}
    >
      {data?.map((item) => (
        <Paper
          elevation={3}
          onClick={() => onClick(item)}
          sx={[
            {
              p: 1,
            },
            (theme) => ({
              backgroundColor: item.stock === 0 ? theme.palette.grey[100] : '',
              color: item.stock === 0 ? theme.palette.grey[300] : '',

              '&:hover': {
                backgroundColor: item.stock === 0 ? theme.palette.grey[300] : theme.palette.primary.contrastText,
                cursor: item.stock === 0 ? 'not-allowed' : 'pointer',
                color: item.stock === 0 ? theme.palette.grey[300] : theme.palette.primary.main,
              },
            }),
          ]}
        >
          {
            <Typography>
              {item.stock === 0 ? (
                <>
                  `SOLD OUT`<del>{item.name}</del>
                </>
              ) : (
                item.name
              )}
            </Typography>
          }
        </Paper>
      ))}
    </Box>
  );
}
