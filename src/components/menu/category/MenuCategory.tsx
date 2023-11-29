import { Loading } from '@/components/common';
import MenuCategoryDetail from '@/components/menu/category/MenuCategoryDetail';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useId } from 'react';
import useQueryGetMenuList from '@/hooks/menu/useQueryGetMenuList';

export default function MenuCategory() {
  const id = useId();
  const { data, isLoading } = useQueryGetMenuList({ req: undefined });

  if (isLoading) return <Loading />;

  return (
    <>
      {data?.menuCategoryList.map((menuCategoryDto, index) => (
        <Accordion key={menuCategoryDto.name + +index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{COFFEE_CATEGORIES[index]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MenuCategoryDetail data={menuCategoryDto.menuList} key={`${id + index}`} />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
