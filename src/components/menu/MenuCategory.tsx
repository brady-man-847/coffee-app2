import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useId } from 'react';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import useMenuList from '@/hooks/menu/useMenuList';
import MenuCategoryDetail from '@/components/menu/MenuCategoryDetail';
import { MenuRs } from '@/dto/menuDto';
import { Loading } from '@/components/common';

export default function MenuCategory() {
  const id = useId();
  const { data, isLoading } = useMenuList();

  const renderData = (menu: MenuRs[]) => {
    const getMenusByType = (idx: number) => menu.filter((i) => i.type === idx);

    return COFFEE_CATEGORIES.map((item, index) => (
      <Accordion key={id + index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuCategoryDetail data={getMenusByType(index)} key={`${id + index}d`} />
        </AccordionDetails>
      </Accordion>
    ));
  };

  if (isLoading) {
    return <Loading />;
  }

  return <>{data ? renderData(data) : <Loading />}</>;
}
