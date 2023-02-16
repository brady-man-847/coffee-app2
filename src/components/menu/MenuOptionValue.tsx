import { Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { OptionValue } from '@/dto/menuDto';
import { useRecoilState } from 'recoil';
import { orderAtom } from '@/atoms/orderAtom';
import _ from 'lodash';

interface Props {
  idx: number;
  data?: OptionValue[];
}

export default function MenuOptionValue({ idx, data }: Props) {
  const [orderObj, setOrderObj] = useRecoilState(orderAtom);

  const handleWriteOption = (e: React.ChangeEvent<HTMLInputElement>, value: string): void => {
    setOrderObj({ ...orderObj, optionValueList: _.defaults({ [idx]: value }, { ...orderObj.optionValueList }) });
  };

  return (
    <Box>
      <FormControl>
        <RadioGroup onChange={handleWriteOption}>
          {data?.length === 1 && <FormControlLabel value={undefined} control={<Radio />} label={'선택없음'} />}
          {data?.map((item) => (
            <FormControlLabel value={item.code} control={<Radio />} label={item.name} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
