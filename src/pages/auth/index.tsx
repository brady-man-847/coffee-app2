import { AccountCircle, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Header } from '@/components/layout';
import { GetServerSidePropsContext } from 'next';
import { ACCESS_TOKEN, AT_EXPIRES_IN, DOMAIN } from '@/defines/token';
import useMutationLogin from '@/hooks/auth/useMutationLogin';
import { setCookie } from 'cookies-next';

export default function AuthPage() {
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
            domain: DOMAIN,
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

AuthPage.getLayout = (page: JSX.Element) => (
  <>
    <Header />
    {page}
  </>
);

export const getServerSideProps = async ({ req: { cookies } }: GetServerSidePropsContext) => {
  if (cookies[ACCESS_TOKEN]) {
    return {
      redirect: {
        destination: '/menu',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
