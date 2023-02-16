import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';
import axios from 'axios';
import { MenuOptionRs } from '@/dto/menuDto';

export default function useMenuOption(menuCode: string, isReady: boolean) {
  return useQuery<MenuOptionRs>(
    queryKeys.menu.option(menuCode),
    async () => {
      const { data } = await axios.get(`https://mcafe-api.onrender.com/menu/${menuCode}`);
      return data;
    },
    {
      enabled: isReady,
    },
  );
}
