import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import _ from 'lodash';
import { ChangeEvent } from 'react';
import { OptionDto } from '@/apis';
import { useRecoilState } from 'recoil';
import { menuStore } from '@/stores/menuStore';

interface Props {
  idx: number;
  data?: OptionDto[];
  menuName?: string;
}

export default function MenuOptionItems({ idx, data, menuName }: Props) {
  const [state, dispatch] = useRecoilState(menuStore);
  const { order } = state;

  const handleRadioOptionChange = (e: ChangeEvent<HTMLInputElement>, value: string): void => {
    const { name } = e.target;

    dispatch({
      ...state,
      order: {
        ...order,
        optionList: _.defaults({ [menuName!]: { [name]: +value } }, { ...order.optionList }),
      },
    });
  };

  const handleCheckOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    dispatch({
      ...state,
      order: {
        ...order,
        optionList: _.defaults({ [menuName!]: checked ? { [name]: +value } : undefined }, { ...order.optionList }),
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
