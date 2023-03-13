import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default queryClient;

export const queryKeys = {
  menu: {
    all: ['menu '] as const,
    option: (menuCode: string) => [...queryKeys.menu.all, menuCode],
  },
  order: {
    all: ['order'] as const,
    byPhone: (phone: string) => [...queryKeys.order.all, phone],
    pay: () => [...queryKeys.order.all, 'pay'],
    add: () => [...queryKeys.order.all, 'add'],
  },
};
