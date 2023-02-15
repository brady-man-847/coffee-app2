import { Box, Paper, Typography } from '@mui/material';
import { MenuRs } from '@/dto';
import styled from '@emotion/styled';

interface Props {
  data?: MenuRs[];
}

export default function MenuCategoryDetail({ data }: Props) {
  return (
    <Box>
      {data?.map((item) => (
        <MenuItem elevation={3}>
          <Typography>{item.name}</Typography>
        </MenuItem>
      ))}
    </Box>
  );
}

const MenuItem = styled(Paper)`
  padding: 10px;
`;
