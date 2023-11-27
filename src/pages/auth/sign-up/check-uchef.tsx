import { AccountCircle, Password, Smartphone } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import useMutationCheckUchef from '@/hooks/auth/useMutationCheckUchef';

export default function CheckUchefPage() {
  const router = useRouter();

  const phoneRef = useRef<HTMLInputElement>();
  const securityIdRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const { mutate: checkUchef } = useMutationCheckUchef({});

  const handleClickCheckUchef = () => {
    checkUchef(
      {
        phone: phoneRef
          .current!.value.replace(/\D/g, '') // Remove non-numeric characters
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') // Format as 3-4-4
          .slice(0, 13), // Limit to 12 digits (3-4-4) as string,
        securityId: securityIdRef.current?.value as string,
        password: passwordRef.current?.value as string,
      },
      {
        onSuccess: (data) => {
          const { certKey } = data;
          router.push(`/auth/sign-up?cert=${certKey}`, '/auth/sign-up', { shallow: true });
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };

  return (
    <>
      <div className="wrapper">
        <Typography variant="h2" color={'error'} sx={{ textAlign: 'left' }}>
          FIRST
          <br />
          CHECK
          <br />
          UCHEF
        </Typography>
        <TextField
          inputRef={phoneRef}
          label="phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Smartphone />
              </InputAdornment>
            ),
          }}
          color="secondary"
        />
        <TextField
          inputRef={securityIdRef}
          label="security id"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          color="secondary"
        />
        <TextField
          label="password"
          inputRef={passwordRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Password />
              </InputAdornment>
            ),
            type: 'password',
          }}
          color="secondary"
        />
        <Button variant="contained" fullWidth onClick={handleClickCheckUchef}>
          <Typography>R U CHIEF ?</Typography>
        </Button>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          height: 100%;
          padding: 32px;
        }
      `}</style>
    </>
  );
}
