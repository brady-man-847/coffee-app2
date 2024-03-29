import { AccountCircle, ContactEmergency, Lock, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import useMutationSignUp from '@/hooks/auth/useMutationSignUp';
import Header from '@/components/layout/Header';
import { AxiosError } from 'axios';
import Main from '@/components/layout/Main';

export default function SignUpPage() {
  const router = useRouter();
  const { query } = router;

  const idRef = useRef<HTMLInputElement>();
  const nicknameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const password2Ref = useRef<HTMLInputElement>();

  const { mutate: signUp } = useMutationSignUp({});

  const handleClickSignUp = () => {
    if (passwordRef.current?.value !== password2Ref.current?.value) return;

    signUp(
      {
        username: idRef.current?.value as string,
        nickname: nicknameRef.current?.value as string,
        password: passwordRef.current?.value as string,
        passwordCheck: password2Ref.current?.value as string,
        certKey: query.cert as string,
      },
      {
        onSuccess: () => {
          router.push('/auth/login');
        },
        onError: (e) => {
          const err = e as AxiosError;
          console.log(err);

          if (err.response?.status === 409) {
            return window.alert('이미 존재하는 아이디입니다.');
          }

          return window.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        },
      },
    );
  };

  return (
    <>
      <div className="wrapper">
        <TextField
          inputRef={idRef}
          label="id"
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

        <Button variant="contained" fullWidth onClick={handleClickSignUp}>
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

SignUpPage.getLayout = (page: JSX.Element) => (
  <>
    <Header />
    <Main>{page}</Main>
  </>
);
