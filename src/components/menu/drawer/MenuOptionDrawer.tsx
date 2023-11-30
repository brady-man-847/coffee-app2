import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import useQueryGetMenuInfo from '@/hooks/menu/useQueryGetMenuInfo';
import MenuOptionItems from '@/components/menu/drawer/MenuOptionItems';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { roomStore } from '@/stores/roomStore';
import { useRecoilState } from 'recoil';
import { menuInitialState, menuStore } from '@/stores/menuStore';

export default function MenuOptionDrawer() {
  const [{ isOpen }, setRoomState] = useRecoilState(roomStore);
  const [state, dispatch] = useRecoilState(menuStore);
  const { menu, order, isDrawerOpen } = state;
  const { data } = useQueryGetMenuInfo({
    req: {
      menuCode: menu.code,
    },
  });

  useEffect(() => {
    if (!data) return;
    if (!isDrawerOpen) return;

    const defaultOptionList = data.menuInfo.optionGroupList.flatMap((i) => {
      return i.optionList
        .filter((j) => j.isDefault)
        .map((j) => {
          return {
            [i.name]: j.code,
          };
        });
    });

    const defaultOptionObject = Object.fromEntries(new Map(defaultOptionList.map((i) => Object.entries(i)[0])));

    dispatch({
      ...state,
      order: {
        ...order,
        optionList: defaultOptionObject,
      },
    });
  }, [data, isDrawerOpen]);

  const handleSaveOrder = async () => {
    localStorage.setItem(
      `coffee_order_${new Date().toLocaleString()}`,
      JSON.stringify({ order, menuCode: menu.code, menuName: menu.name }),
    );

    setRoomState({ isOpen: !isOpen });
    // callOrder(
    //   { order, menuCode: menu.code },
    //   {
    //     onSettled: () => {
    //       setIsRequestApi(false);
    //       dispatch({ type: 'INIT_MENU' });
    //     },
    //   },
    // );
  };

  const handlePhoneInputChange = (formattedValue: string) => {
    // dispatch({ type: 'SET_ORDER', order: { ...order, phone: formattedValue } });
  };

  const handleDrawerClose = () => {
    dispatch(menuInitialState);
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
      <Box>
        <IconButton onClick={handleDrawerClose} sx={{ float: 'right' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" sx={{ mt: 1, mb: 1, pl: 1 }}>
          {menu.name}
        </Typography>
        {data?.menuInfo?.optionGroupList?.map((i, idx) => {
          return (
            <Accordion sx={{ mt: 2 }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>{i.name}</AccordionSummary>
              <AccordionDetails>
                <MenuOptionItems idx={idx} data={i.optionList} menuName={i.name} />
              </AccordionDetails>
            </Accordion>
          );
        })}
        <Box sx={{ display: 'flex', width: '100%', gap: '8px' }}>
          <Button
            variant={'contained'}
            onClick={handleSaveOrder}
            color={'secondary'}
            disabled={isOpen}
            sx={{
              margin: '4px',
              width: '100%',
              gap: '8px',
            }}
          >
            <DoorSlidingIcon />방 선택하기
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
