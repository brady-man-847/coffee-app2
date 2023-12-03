import { AccountCircle, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Header } from '@/components/layout';
import { ACCESS_TOKEN, AT_EXPIRES_IN } from '@/defines/token';
import useMutationLogin from '@/hooks/auth/useMutationLogin';
import { setCookie } from 'cookies-next';

export default function AuthLoginPage() {
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const { mutate: login } = useMutationLogin({});

  const handleClickSignIn = () => {
    login(
      {
        username: usernameRef.current?.value as string,
        password: passwordRef.current?.value as string,
      },
      {
        onSuccess: (data) => {
          const { token } = data;

          setCookie(ACCESS_TOKEN, token, {
            expires: new Date(Date.now() + AT_EXPIRES_IN),
            path: '/',
          });
          router.push('/menu');
        },
        onError: (error) => console.log({ error }),
      },
    );
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

AuthLoginPage.getLayout = (page: JSX.Element) => (
  <>
    <Header />
    {page}
  </>
);
