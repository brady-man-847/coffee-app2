import useOrderList from '@/hooks/order/useOrderList';
import { useContextSelector } from 'use-context-selector';
import { OrderContext } from '@/context/order/OrderContext';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { OrderRs } from '@/dto/orderDto';
import { Loading } from '@/components/common';

export default function OrderChooseScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const { data, isLoading } = useOrderList(phone, phone !== '');
  console.log(data, isLoading);

  const handleOrder = () => {
    alert('주문하시겠습니까?');
  };

  const renderItems = (list: OrderRs[] | undefined) => {
    if (list === undefined) return;

    return list.map((itm, idx) => (
      <Box onClick={handleOrder}>
        <Typography>{itm.menuName}</Typography>
        <Typography>{itm.name}</Typography>
        <Typography>{itm.optionNameList.join(' ')}</Typography>
        <Divider sx={{ m: 2 }} />
      </Box>
    ));
  };
  return (
    <Paper elevation={3} sx={{ p: 1, m: 1 }}>
      {isLoading ? <Loading /> : renderItems(data)}
    </Paper>
  );
}
