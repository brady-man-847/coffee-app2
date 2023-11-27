import { API_URL } from '@/config/api';
import { queryKeys } from '@/config/queryClient';
import { MenuCategoryRes } from '@/dto/menuDto';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMenuList() {
  return useQuery<Array<MenuCategoryRes>>(queryKeys.menu.all, async () => {
    const { data } = await axios.get(`${API_URL}/menu`);
    return data.menuCategoryList as MenuCategoryRes[];
  });
}
