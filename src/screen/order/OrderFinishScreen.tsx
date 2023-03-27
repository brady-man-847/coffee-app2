import { Avatar, Box, Card, CardContent, CardHeader } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useContextSelector } from 'use-context-selector';
import { OrderContext } from '@/context/order/OrderContext';

export default function OrderFinishScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" />}
          title={'잘 먹겠습니다.'}
          subheader={`${new Date().toLocaleDateString() + phone}님`}
        />
        <CardContent sx={{ textAlign: 'center', height: 400 }}>
          <CheckCircleOutlineIcon color={'success'} sx={{ height: 400, fontSize: 300 }} />
        </CardContent>
      </Card>
    </Box>
  );
}
