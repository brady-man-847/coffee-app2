import { OrderDto } from '@/apis';

export interface CustomOrderDto extends Omit<OrderDto, 'optionList'> {
  optionList: {
    [key: string]: {
      [key: string]: number;
    };
  };
}
