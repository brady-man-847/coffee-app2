import { Box, Button, TextField, Typography } from '@mui/material';
import { useContextSelector } from 'use-context-selector';
import { OrderContext, OrderView } from '@/context/order/OrderContext';
import { ChangeEvent } from 'react';
import axios from 'axios';

export default function OrderPhoneScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const dispatch = useContextSelector(OrderContext, (v) => v[1]);

  const handleSubmit = () => {
    axios
      .get(`https://mcafe-api.onrender.com/order/${phone}`)
      .then(async (r) => {
        const { data } = r;
        if (data?.length !== 0) {
          dispatch({ type: 'SET_VIEW', view: OrderView.CHOOSE_ORDER });
        } else {
          alert('주문이 없습니다');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const handlePhoneAuthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PHONE', phone: e.target.value });
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        당신은 누구십니까?
      </Typography>
      <Box sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth label="핸드폰 번호" autoFocus onChange={handlePhoneAuthInputChange} />
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
          인증하기
        </Button>
      </Box>
    </Box>
  );
}
