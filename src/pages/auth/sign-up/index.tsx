import { AccountCircle, ContactEmergency, Lock, Password } from '@mui/icons-material';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import useMutationSignUp from '@/hooks/auth/useMutationSignUp';

export default function SignUpPage() {
  const router = useRouter();
  const { query } = router;

  const usernameRef = useRef<HTMLInputElement>();
  const nicknameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const password2Ref = useRef<HTMLInputElement>();

  const { mutate: signUp } = useMutationSignUp({});

  const handleClickSignUp = () => {
    if (passwordRef.current?.value !== password2Ref.current?.value) return;

    signUp(
      {
        username: usernameRef.current?.value as string,
        nickname: nicknameRef.current?.value as string,
        password: passwordRef.current?.value as string,
        passwordCheck: password2Ref.current?.value as string,
        certKey: query.cert as string,
      },
      {
        onSuccess: () => {
          router.push('/auth');
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
