import { MenuContext } from '@/context/menu/MenuContext';
import { OptionValue } from '@/dto/menuDto';
import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import _ from 'lodash';
import { ChangeEvent } from 'react';
import { useContextSelector } from 'use-context-selector';

interface Props {
  idx: number;
  data?: OptionValue[];
  menuName?: string;
}

export default function MenuOptionList({ idx, data, menuName }: Props) {
  const { order } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);

  const handleRadioOptionChange = (e: ChangeEvent<HTMLInputElement>, value: string): void => {
    const { name } = e.target;
    dispatch({
      type: 'SET_ORDER',
      order: {
        ...order,
        optionValueList: _.defaults({ [menuName!]: value }, { ...order.optionValueList }),
        optionNameList: _.defaults({ [menuName!]: name }, { ...order.optionNameList }),
      },
    });
  };

  const handleCheckOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, name } = e.target;

    dispatch({
      type: 'SET_ORDER',
      order: {
        ...order,
        optionValueList: _.defaults({ [menuName!]: checked ? value : null }, { ...order.optionValueList }),
        optionNameList: _.defaults({ [menuName!]: checked ? name : null }, { ...order.optionNameList }),
      },
    });
  };

  return (
    <Box>
      <FormControl>
        {data?.length === 1 ? (
          <FormControlLabel
            value={data[0].code}
            control={<Checkbox onChange={handleCheckOptionChange} defaultChecked={data[0].isOptionDefault} />}
            label={data[0].name}
            name={data[0].name}
          />
        ) : (
          <RadioGroup onChange={handleRadioOptionChange} defaultValue={data?.find((i) => i.isOptionDefault)?.code}>
            {data?.map((item) => {
              return (
                <FormControlLabel
                  key={`${item.name}_key`}
                  value={item.code}
                  control={<Radio />}
                  label={item.name}
                  defaultChecked={item.isOptionDefault}
                  name={item.name}
                />
              );
            })}
          </RadioGroup>
        )}
      </FormControl>
    </Box>
  );
}
