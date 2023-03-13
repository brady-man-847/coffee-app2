import { MenuRs } from '@/dto';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuCategoryDetail from '@/components/menu/MenuCategoryDetail';
import { useId } from 'react';

export default function MenuItem(menu: MenuRs[]) {
  const id = useId();
  const getMenusByType = (idx: number) => menu.filter((i) => i.type === idx);
  return COFFEE_CATEGORIES.map((item, index) => (
    <Accordion key={id + index}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{item}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MenuCategoryDetail data={getMenusByType(index)} key={`${id + index}`} />
      </AccordionDetails>
    </Accordion>
  ));
}
