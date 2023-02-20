import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuOptionList from '@/components/menu/MenuOptionList';
import useMenuOption from '@/hooks/menu/useMenuOption';
import axios from 'axios';
import _ from 'lodash';
import { useContextSelector } from 'use-context-selector';
import { MenuContext } from '@/context/menu/MenuContext';
import { Loading } from '@/components/common';
import { ChangeEvent, useState } from 'react';
import PhoneInput from '@/components/common/PhoneInput';

export default function MenuOptionDrawer() {
  const { menu, order, isDrawerOpen } = useContextSelector(MenuContext, (v) => v[0]);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);
  const { data, isLoading } = useMenuOption(menu.code, menu.code !== undefined);

  const [isRequestApi, setIsRequestApi] = useState(false);

  const handleSaveOrder = async () => {
    console.log({ ...order, menuCode: menu.code, optionValueList: _.values(order.optionValueList) });
    setIsRequestApi(true);
    const result = await axios
      .post('https://mcafe-api.onrender.com/order', {
        ...order,
        menuCode: menu.code,
        optionValueList: _.compact(_.values(order.optionValueList)),
        setDefault: false,
      })
      .then((r) => {
        const { data: rData } = r;
        alert(rData);
      })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => {
        setIsRequestApi(false);
      });

    console.log(result);

    return null;
  };

  const handlePhoneInputChange = (formattedValue: string) => {
    dispatch({ type: 'SET_ORDER', order: { ...order, phone: formattedValue } });
  };

  const handleDrawerClose = () => {
    dispatch({ type: 'SET_DRAWER_OPEN', isDrawerOpen: false });
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
      {isLoading ? (
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
              장바구니
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
}
