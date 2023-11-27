import { API_URL } from '@/config/api';
import { queryKeys } from '@/config/queryClient';
import { MenuOptionRs } from '@/dto/menuDto';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMenuOption(menuCode: string, isReady: boolean) {
  return useQuery<MenuOptionRs>(
    queryKeys.menu.option(menuCode),
    async () => {
      const { data } = await axios.get(`${API_URL}/menu/${menuCode}`);
      return data.menuInfo;
    },
    {
      enabled: isReady,
    },
  );
}
