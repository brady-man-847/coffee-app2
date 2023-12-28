import { useRef, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material';
import { Password, Smartphone } from '@mui/icons-material';
import WeekendIcon from '@mui/icons-material/Weekend';
import useMutationCreateRoom from '@/hooks/room/useMutationCreateRoom';
import { RoomRequestCreateStatusEnum } from '@/apis';
import { roomStore } from '@/stores/roomStore';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

export default function RoomCreateForm() {
  const router = useRouter();
  const [, dispatch] = useRecoilState(roomStore);

  const [isPrivate, setIsPrivate] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: createRoom } = useMutationCreateRoom({});

  const handleClickButton = () => {
    if (!nameRef.current?.value) {
      window.alert('방 이름을 입력해주세요.');
      return;
    }

    if (isPrivate && !passwordRef.current?.value) {
      window.alert('비밀번호를 입력해주세요.');
      return;
    }

    createRoom(
      {
        name: nameRef.current?.value,
        status: isPrivate ? RoomRequestCreateStatusEnum.PRIVATE : RoomRequestCreateStatusEnum.PUBLIC,
        password: passwordRef.current?.value,
      },
      {
        onSuccess: () => {
          window.alert('방 생성에 성공했습니다.');
          router.reload();
        },
        onError: () => {
          window.alert('방 생성에 실패했습니다.');
        },
        onSettled: () => {
          dispatch({ isOpen: false, modalType: 'none' });
        },
      },
    );
  };

  return (
    <>
      <div className="wrapper">
        <Box sx={{ texAlign: 'center', width: '100%' }}>
          <WeekendIcon sx={{ fontSize: 88 }} />
        </Box>
        <TextField
          inputRef={nameRef}
          label="room name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Smartphone />
              </InputAdornment>
            ),
          }}
          color="secondary"
          required
        />
        <Box sx={{ textAlign: 'right' }}>
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  setIsPrivate(!isPrivate);
                }}
              />
            }
            label="Is Secret Room ?"
          />
        </Box>
        {isPrivate && (
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
        )}

        <Button variant="contained" fullWidth onClick={handleClickButton}>
          <Typography>Make Room :)</Typography>
        </Button>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          height: 100%;
          width: fit-content;
          padding: 32px;
        }
      `}</style>
    </>
  );
}
