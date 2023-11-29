import { MenuContext } from '@/components/menu/MenuContext';
import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import _ from 'lodash';
import { ChangeEvent } from 'react';
import { useContextSelector } from 'use-context-selector';
import { OptionDto } from '@/apis';

interface Props {
  idx: number;
  data?: OptionDto[];
  menuName?: string;
}

export default function MenuOptionItems({ idx, data, menuName }: Props) {
  const { order } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);

  const handleRadioOptionChange = (e: ChangeEvent<HTMLInputElement>, value: string): void => {
    dispatch({
      type: 'SET_ORDER',
      order: {
        ...order,
        optionList: _.defaults({ [menuName!]: +value }, { ...order.optionList }),
      },
    });
  };

  const handleCheckOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    dispatch({
      type: 'SET_ORDER',
      order: {
        ...order,
        optionList: _.defaults({ [menuName!]: checked ? +value : undefined }, { ...order.optionList }),
      },
    });
  };

  return (
    <Box>
      <FormControl>
        {data?.length === 1 ? (
          [...data].map((item) => {
            const { code, isDefault, name } = item;
            return (
              <FormControlLabel
                value={code}
                control={<Checkbox onChange={handleCheckOptionChange} defaultChecked={isDefault} />}
                label={name}
                name={name}
              />
            );
          })
        ) : (
          <RadioGroup onChange={handleRadioOptionChange} defaultValue={data?.find((i) => i.isDefault)?.code}>
            {data?.map((item) => {
              const { code, isDefault, name } = item;
              return (
                <FormControlLabel
                  key={`${name}_key`}
                  value={code}
                  control={<Radio />}
                  label={name}
                  defaultChecked={isDefault}
                  name={name}
                />
              );
            })}
          </RadioGroup>
        )}
      </FormControl>
    </Box>
  );
}
