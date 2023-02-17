import { Accordion, AccordionDetails, AccordionSummary, CircularProgress, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useId } from 'react';
import { COFFEE_CATEGORIES } from '@/constants/coffeeCategory';
import useMenuList from '@/hooks/menu/useMenuList';
import MenuCategoryDetail from '@/components/menu/MenuCategoryDetail';
import MenuOrderModal from '@/components/menu/MenuOrderModal';
import { MenuRs } from '@/dto/menuDto';

export default function MenuCategory() {
  const id = useId();
  const { data, isLoading } = useMenuList();

  console.log(data, isLoading);

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
    return <CircularProgress />;
  }

  return (
    <>
      {data ? renderData(data) : <CircularProgress />}
      <MenuOrderModal />
    </>
  );
}
