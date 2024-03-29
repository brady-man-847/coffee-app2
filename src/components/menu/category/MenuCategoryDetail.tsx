import { Box, Paper, Typography } from '@mui/material';
import { MenuDto } from '@/apis';
import { useRecoilState } from 'recoil';
import { menuStore } from '@/stores/menuStore';

interface Props {
  data?: MenuDto[];
}

export default function MenuCategoryDetail({ data }: Props) {
  const [state, dispatch] = useRecoilState(menuStore);

  const handleClickOpenMenu = (item: MenuDto) => {
    if (item.stock !== 0) {
      dispatch({ ...state, isDrawerOpen: true, menu: item });
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
      <>
        {data?.map((item, index) => (
          <Paper
            key={`${item.name}_${item.code}_${index}`}
            elevation={3}
            onClick={() => handleClickOpenMenu(item)}
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
                    `SOLD OUT`
                    <del>{item.name}</del>
                  </>
                ) : (
                  item.name
                )}
              </Typography>
            }
          </Paper>
        ))}
      </>
    </Box>
  );
}
