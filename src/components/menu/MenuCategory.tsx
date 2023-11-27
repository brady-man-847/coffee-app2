import { Loading } from '@/components/common';
import MenuCategoryDetail from '@/components/menu/MenuCategoryDetail';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import { MenuCategoryRes } from '@/dto/menuDto';
import useMenuList from '@/hooks/menu/useMenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useId } from 'react';

export default function MenuCategory() {
  const id = useId();
  const { data, isLoading } = useMenuList();

  const renderData = (menuCategoryList: MenuCategoryRes[]) => {
    return menuCategoryList.map((coffeeCategory, index) => (
      <Accordion key={id + index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{COFFEE_CATEGORIES[index]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuCategoryDetail data={coffeeCategory.menuList} key={`${id + index}`} />
        </AccordionDetails>
      </Accordion>
    ));
  };

  if (isLoading) {
    return <Loading />;
  }

  return <>{data ? renderData(data) : <Loading />}</>;
}
