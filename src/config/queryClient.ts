import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default queryClient;

export const queryKeys = {
  menu: {
    all: ['menu '] as const,
    option: (menuCode: string) => [...queryKeys.menu.all, menuCode],
  },
};
