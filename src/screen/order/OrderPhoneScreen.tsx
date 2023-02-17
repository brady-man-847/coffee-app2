import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useContextSelector } from 'use-context-selector';
import { OrderContext, OrderView } from '@/context/order/OrderContext';

export default function OrderPhoneScreen() {
  const { phone } = useContextSelector(OrderContext, (v) => v[0]);
  const dispatch = useContextSelector(OrderContext, (v) => v[1]);
  const handleSubmit = () => {
    console.log(phone);
    dispatch({ type: 'SET_VIEW', view: OrderView.CHOOSE_ORDER });
  };
  const handlePhoneInputChange = (e: any) => {
    dispatch({ phone: e.target.value, type: 'SET_PHONE' });
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="핸드폰 번호"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handlePhoneInputChange}
        />

        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
          인증하기
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
