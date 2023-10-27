import { Loading } from '@/components/common';
import { queryKeys } from '@/config/queryClient';
import { OrderContext, OrderView } from '@/context/order/OrderContext';
import { OrderRs } from '@/dto/orderDto';
import useCallOrderCancel from '@/hooks/order/useCallOrderCancel';
import useCallPay from '@/hooks/order/useCallPay';
import useOrderList from '@/hooks/order/useOrderList';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useContextSelector } from 'use-context-selector';

export default function OrderChooseScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const dispatch = useContextSelector(OrderContext, (v) => v[1]);
  const queryClient = useQueryClient();
  const { data, isLoading, refetch: reloadOrderList } = useOrderList(phone, phone !== '');
  const { mutate: callPay, isLoading: isPayLoading } = useCallPay();
  const { mutate: callOrderCancel, isLoading: isCancelLoading } = useCallOrderCancel();

  const handleOrder = () => {
    if (window.confirm(`주문하시겠습니까?? ${phone}님?`)) {
      callPay(phone, { onSuccess: () => dispatch({ type: 'SET_VIEW', view: OrderView.FINISH_ORDER }) });
    } else {
      window.alert('네');
    }
  };

  // const handleCancelOrder = (item: OrderRs) => {
  //   if (window.confirm(`삭제하시겠습니까?? ${item.phone}의 주문 ?!`)) {
  //     callOrderCancel(phone, { onSuccess: () => reloadOrderList() });
  //   } else {
  //     window.alert('네');
  //   }
  // };

  const handleClickRefresh = () => {
    queryClient.invalidateQueries(queryKeys.order.byPhone(phone));
  };

  const render = (list: OrderRs[] | undefined) => {
    if (list === undefined) return;

    const renderItems = list.map((itm, idx) => (
      <Box>
        <Typography>{itm.menuName}</Typography>
        <Typography>{itm.name}</Typography>
        <Typography>{itm.optionNameList.join(' ')}</Typography>
        <Divider sx={{ m: 2 }} />
      </Box>
    ));

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {renderItems}
        <Button
          variant="contained"
          onClick={handleOrder}
          startIcon={<CurrencyExchangeIcon />}
          sx={[
            (theme) => ({
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            }),
          ]}
        >
          결제하기
        </Button>
        <Button
          variant="contained"
          onClick={handleClickRefresh}
          startIcon={<RefreshIcon />}
          sx={[
            (theme) => ({
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.warning.contrastText,
            }),
          ]}
        >
          새로고침
        </Button>
      </Box>
    );
  };
  return (
    <Paper elevation={3} sx={{ p: 1, m: 1 }}>
      {isLoading || isPayLoading || isCancelLoading ? <Loading /> : render(data)}
    </Paper>
  );
}
