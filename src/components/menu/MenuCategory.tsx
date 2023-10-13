import { Loading } from '@/components/common';
import MenuCategoryDetail from '@/components/menu/MenuCategoryDetail';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import { MenuRs } from '@/dto/menuDto';
import useMenuList from '@/hooks/menu/useMenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useId } from 'react';

export default function MenuCategory() {
  const id = useId();
  const { data, isLoading } = useMenuList();

  const renderData = (menu: MenuRs[]) => {
    // @brady type(0,coffee)(1,nonCoffee)...
    const getMenusByType = (idx: number) => menu.filter((i) => i.type === idx - 1);

    return COFFEE_CATEGORIES.map((coffeeCategory, index) => (
      <Accordion key={id + index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{coffeeCategory}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuCategoryDetail type={coffeeCategory} data={getMenusByType(index)} key={`${id + index}`} />
        </AccordionDetails>
      </Accordion>
    ));
  };

  if (isLoading) {
    return <Loading />;
  }

  return <>{data ? renderData(data) : <Loading />}</>;
}
