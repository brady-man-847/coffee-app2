import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { modalAtom } from '@/atoms/modalAtom';
import { useRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';
import { menuAtom } from '@/atoms/menuAtom';
import useMenuOption from '@/hooks/menu/useMenuOption';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuOptionValue from '@/components/menu/MenuOptionValue';
import { orderAtom } from '@/atoms/orderAtom';
import axios from 'axios';
import _ from 'lodash';

export default function MenuOrderModal() {
  const [mounted, setMounted] = useRecoilState(modalAtom);
  const [menu, setMenu] = useRecoilState(menuAtom);
  const [orderObj, setOrderObj] = useRecoilState(orderAtom);

  const { data, isLoading } = useMenuOption(menu.code, menu.code !== undefined);

  const handleClose = () => {
    return setMounted(false);
  };

  const handleSaveOrder = async () => {
    console.log({ ...orderObj, menuCode: menu.code });
    const result = await axios.post('https://mcafe-api.onrender.com/order', {
      ...orderObj,
      menuCode: menu.code,
      optionValueList: _.values(orderObj.optionValueList),
    });

    console.log(result);

    return null;
  };

  const handleWritePhone = (e: any) => {
    setOrderObj({ ...orderObj, phone: e.target.value });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Modal open={mounted} onClose={handleClose}>
      <Box sx={style}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {menu.name}
        </Typography>
        {!!data &&
          data.optionGroupList.map((i, idx) => (
            <Accordion id="modal-modal-description" sx={{ mt: 2 }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>{i.name}</AccordionSummary>
              <AccordionDetails>
                <MenuOptionValue idx={idx} data={i.optionValueList} />
              </AccordionDetails>
            </Accordion>
          ))}
        <TextField id="outlined-basic" label="핸드폰 번호" variant="outlined" onChange={handleWritePhone} />
        <Button variant={'contained'} onClick={handleSaveOrder}>
          장바구니
        </Button>
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflow: 'auto',
};
