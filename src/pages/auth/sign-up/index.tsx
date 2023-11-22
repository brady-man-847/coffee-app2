import { API_URL } from '@/config/api';
import { AccountCircle, ContactEmergency, Lock, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const { query } = router;

  const usernameRef = useRef<HTMLInputElement>();
  const nicknameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const password2Ref = useRef<HTMLInputElement>();

  const handleClickSignIn = () => {
    if (passwordRef.current?.value !== password2Ref.current?.value) return;
    axios
      .post(`${API_URL}/member/signup`, {
        username: usernameRef.current?.value as string,
        nickname: nicknameRef.current?.value as string,
        password: passwordRef.current?.value as string,
        passwordCheck: password2Ref.current?.value as string,
        certKey: query.cert as string,
      })
      .then((res) => {
        console.log(res);
        router.push('/auth');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <TextField
          inputRef={nicknameRef}
          label="nickname"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergency />
              </InputAdornment>
            ),
          }}
          color="secondary"
        />
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
        <TextField
          label="password again"
          inputRef={password2Ref}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            type: 'password',
          }}
          color="secondary"
        />

        <Button variant="contained" fullWidth onClick={handleClickSignIn}>
          <Typography color={'secondary'}>WELCOME :)</Typography>
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
