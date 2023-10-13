import PhoneInput from '@/components/common/PhoneInput';
import { OrderContext, OrderView } from '@/context/order/OrderContext';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';

export default function OrderPhoneScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const dispatch = useContextSelector(OrderContext, (v) => v[1]);

  useEffect(() => {
    dispatch({ type: 'SET_PHONE', phone: localStorage.getItem('phone') ?? '' });
  }, []);

  const handleSubmit = () => {
    axios
      .get(`https://mcafe-api.onrender.com/order/${phone}`)
      .then(async (r) => {
        const { data } = r;
        if (data?.length !== 0) {
          dispatch({ type: 'SET_VIEW', view: OrderView.CHOOSE_ORDER });
          if (window.confirm(`${phone} 번호를 저장하시겠습까?`)) {
            localStorage.setItem('phone', phone);
          }
        } else {
          alert('주문이 없습니다');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const handlePhoneAuthInputChange = (formattedValue: string) => {
    dispatch({ type: 'SET_PHONE', phone: formattedValue });
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
        걸리셨나요 ?
      </Typography>
      <Box sx={{ mt: 1 }}>
        <PhoneInput
          value={phone}
          margin="normal"
          required
          fullWidth
          label="핸드폰 번호"
          autoFocus
          handleValueChange={handlePhoneAuthInputChange}
        />
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
          인증하기
        </Button>
      </Box>
    </Box>
  );
}
