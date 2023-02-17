import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';
import axios from 'axios';
import { MenuRs } from '@/dto/menuDto';

export default function useMenuList() {
  return useQuery<Array<MenuRs>>(queryKeys.menu.all, async () => {
    const { data } = await axios.get('https://mcafe-api.onrender.com/menu');
    return data;
  });
}
