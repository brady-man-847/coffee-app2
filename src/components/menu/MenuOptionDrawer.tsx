import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuOptionList from '@/components/menu/MenuOptionList';
import useMenuOption from '@/hooks/menu/useMenuOption';
import { useContextSelector } from 'use-context-selector';
import { MenuContext } from '@/context/menu/MenuContext';
import { Loading } from '@/components/common';
import { useState } from 'react';
import PhoneInput from '@/components/common/PhoneInput';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import useCallOrder from '@/hooks/menu/useCallOrder';

export default function MenuOptionDrawer() {
  const { menu, order, isDrawerOpen } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);
  const { data, isLoading } = useMenuOption(menu.code, menu.code !== undefined);
  const { mutate, isLoading: isCallWaiting } = useCallOrder();
  const [isRequestApi, setIsRequestApi] = useState(false);

  const handleSaveOrder = async () => {
    setIsRequestApi(true);
    mutate(
      { order, menuCode: menu.code },
      {
        onSuccess: (rtnData) => window.alert(rtnData),
        onError: (e) => {
          const err = e as Error;
          window.alert(err.message);
        },
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
                  <MenuOptionList idx={idx} data={i.optionValueList} />
                </AccordionDetails>
              </Accordion>
            ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <PhoneInput label="핸드폰 번호" variant="outlined" handleValueChange={handlePhoneInputChange} />
            <Button variant={'contained'} onClick={handleSaveOrder} disabled={isRequestApi}>
              <ShoppingBasketIcon />
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
}
