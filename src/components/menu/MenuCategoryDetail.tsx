import { Box, Paper, Typography } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { modalAtom } from '@/atoms/modalAtom';
import { menuAtom } from '@/atoms/menuAtom';
import { MenuRs } from '@/dto/menuDto';

interface Props {
  data?: MenuRs[];
}

export default function MenuCategoryDetail({ data }: Props) {
  const setMounted = useSetRecoilState(modalAtom);
  const setMenu = useSetRecoilState(menuAtom);

  const onClick = (item: MenuRs) => {
    setMounted(true);
    setMenu(item);
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
