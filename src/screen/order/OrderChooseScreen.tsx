import useOrderList from '@/hooks/order/useOrderList';
import { useContextSelector } from 'use-context-selector';
import { OrderContext, OrderView } from '@/context/order/OrderContext';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { OrderRs } from '@/dto/orderDto';
import { Loading } from '@/components/common';
import axios from 'axios';
import useCallPay from '@/hooks/order/useCallPay';

export default function OrderChooseScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const dispatch = useContextSelector(OrderContext, (v) => v[1]);
  const { data, isLoading } = useOrderList(phone, phone !== '');
  const { mutate, isLoading: isPayLoading } = useCallPay();

  const handleOrder = () => {
    if (window.confirm(`주문하시겠습니까?? ${phone}님?`)) {
      mutate(phone, { onSuccess: () => dispatch({ type: 'SET_VIEW', view: OrderView.FINISH_ORDER }) });
    } else {
      window.alert('네');
    }
  };

  const renderItems = (list: OrderRs[] | undefined) => {
    if (list === undefined) return;

    return list.map((itm, idx) => (
      <Box>
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
      {isPayLoading && <Loading />}
      <Button
        variant="contained"
        onClick={handleOrder}
        sx={[
          (theme) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }),
        ]}
      >
        결제하기
      </Button>
    </Paper>
  );
}
