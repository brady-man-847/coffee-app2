import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { OptionValue } from '@/dto/menuDto';
import _ from 'lodash';
import { ChangeEvent } from 'react';
import { useContextSelector } from 'use-context-selector';
import { MenuContext } from '@/context/menu/MenuContext';

interface Props {
  idx: number;
  data?: OptionValue[];
}

export default function MenuOptionList({ idx, data }: Props) {
  const { order } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);

  const handleRadioOptionChange = (_e: ChangeEvent<HTMLInputElement>, value: string): void => {
    dispatch({
      type: 'SET_ORDER',
      order: { ...order, optionValueList: _.defaults({ [idx]: value }, { ...order.optionValueList }) },
    });
  };

  const handleCheckOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    dispatch({
      type: 'SET_ORDER',
      order: { ...order, optionValueList: _.defaults({ [idx]: checked ? value : null }, { ...order.optionValueList }) },
    });
  };

  return (
    <Box>
      <FormControl>
        {data?.length === 1 ? (
          <FormControlLabel
            value={data[0].code}
            control={<Checkbox onChange={handleCheckOptionChange} />}
            label={data[0].name}
            checked={data[0].isOptionDefault}
          />
        ) : (
          <RadioGroup onChange={handleRadioOptionChange}>
            {data?.map((item) => (
              <FormControlLabel value={item.code} control={<Radio />} label={item.name} checked={item.isOptionDefault} />
            ))}
          </RadioGroup>
        )}
      </FormControl>
    </Box>
  );
}
