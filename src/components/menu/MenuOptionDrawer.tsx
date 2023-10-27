import { Loading } from '@/components/common';
import PhoneInput from '@/components/common/PhoneInput';
import MenuOptionList from '@/components/menu/MenuOptionList';
import { MenuContext } from '@/context/menu/MenuContext';
import useCallOrder from '@/hooks/menu/useCallOrder';
import useMenuOption from '@/hooks/menu/useMenuOption';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';

export default function MenuOptionDrawer() {
  const { menu, order, isDrawerOpen } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);
  const { data, isLoading } = useMenuOption(menu.code, menu.code !== undefined);
  const { mutate: callOrder, isLoading: isCallWaiting } = useCallOrder();
  const [isRequestApi, setIsRequestApi] = useState(false);

  const handleSaveOrder = async () => {
    setIsRequestApi(true);
    if (!localStorage.getItem('phone')) {
      if (window.confirm(`${order.phone} 번호를 저장하시겠습까?`)) {
        localStorage.setItem('phone', order.phone);
      }
    }

    localStorage.setItem(
      `coffee_order_${new Date().toLocaleString()}`,
      JSON.stringify({ order, menuCode: menu.code, menuName: menu.name }),
    );
    callOrder(
      { order, menuCode: menu.code },
      {
        onSettled: () => {
          setIsRequestApi(false);
          dispatch({ type: 'INIT_MENU' });
        },
      },
    );
  };

  const handlePhoneInputChange = (formattedValue: string) => {
    dispatch({ type: 'SET_ORDER', order: { ...order, phone: formattedValue } });
  };

  const handleDrawerClose = () => {
    dispatch({ type: 'INIT_MENU' });
  };

  return (
    <Drawer
      anchor={'bottom'}
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      ModalProps={{
        sx: {
          alignContent: 'center',
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          height: '80vh',
        },
      }}
      SlideProps={{}}
      PaperProps={{
        sx: {
          width: '100%',
          alignContent: 'center',
          m: 'auto',
          p: 2,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: '80vh',
        },
      }}
    >
      {isLoading || isCallWaiting ? (
        <Loading />
      ) : (
        <Box>
          <IconButton onClick={handleDrawerClose} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" sx={{ mt: 1, mb: 1, pl: 1 }}>
            {menu.name}
          </Typography>
          {!!data &&
            data.optionGroupList.map((i, idx) => (
              <Accordion sx={{ mt: 2 }} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>{i.name}</AccordionSummary>
                <AccordionDetails>
                  <MenuOptionList idx={idx} data={i.optionValueList} menuName={i.name} />
                </AccordionDetails>
              </Accordion>
            ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '8px' }}>
            <PhoneInput label="핸드폰 번호" variant="outlined" handleValueChange={handlePhoneInputChange} />
            <Button
              variant={'contained'}
              onClick={handleSaveOrder}
              disabled={isRequestApi}
              sx={{
                margin: '4px',
              }}
            >
              <ShoppingBasketIcon />
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
}
