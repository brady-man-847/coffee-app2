import { API_URL } from '@/config/api';
import { AccountCircle, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function AuthPage() {
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleClickSignIn = () => {
    axios
      .post(`${API_URL}/member/login`, {
        username: usernameRef.current?.value as string,
        password: passwordRef.current?.value as string,
      })
      .then((res) => {
        console.log(res);
        router.push('/menu');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickSignUp = () => {
    router.push('/auth/sign-up/check-uchef');
  };

  return (
    <>
      <div className="wrapper">
        <TextField
          inputRef={usernameRef}
          label="username"
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
        <Button variant="contained" fullWidth onClick={handleClickSignIn}>
          <Typography color={'secondary'}>DO SIGN IN</Typography>
        </Button>
        <Button variant="contained" fullWidth onClick={handleClickSignUp}>
          <Typography color={'error'}>OR SIGN UP</Typography>
        </Button>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          gap: 16px;
          padding: 32px;
        }
      `}</style>
    </>
  );
}
