import { RoomDto } from '@/apis';
import { Chip, TableCell, TableRow } from '@mui/material';
import useMutationCreateOrder from '@/hooks/order/useMutationCreateOrder';
import { useRecoilState } from 'recoil';
import { menuInitialState, menuStore } from '@/stores/menuStore';
import _ from 'lodash';
import { roomInitialState, roomStore } from '@/stores/roomStore';

interface Props {
  data: RoomDto;
}
export default function RoomTableCard({ data }: Props) {
  const { sn, hostName, name, status } = data;

  const [{ order, menu }, menuDispatch] = useRecoilState(menuStore);
  const [, roomDispatch] = useRecoilState(roomStore);

  const { mutate: createOrder } = useMutationCreateOrder({});

  const handleClickRow = () => {
    const CONFIRM_MESSAGE = `해당 방에 주문하시겠습니까?\n주문을 확인해주세요!\n---\n${menu.name}\n${_.keys(order.optionList).join(
      '\n',
    )}\n---`;
    if (window.confirm(CONFIRM_MESSAGE)) {
      createOrder(
        {
          roomSn: sn,
          menuCode: menu.code,
          optionList: _.values(order.optionList),
        },
        {
          onSuccess: async () => {
            setTimeout(() => {
              roomDispatch(roomInitialState);
              menuDispatch(menuInitialState);
            }, 1000);

            window.alert('주문이 완료되었습니다.');
          },
          onError: () => {
            window.alert('주문이 실패하였습니다.');
          },
        },
      );
    }
  };

  return (
    <>
      <TableRow onClick={handleClickRow}>
        <TableCell>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              방번호:{' '}
              <Chip
                sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                }}
                label={sn}
              />
            </div>
            <div>
              방장:{' '}
              <Chip
                sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                }}
                label={hostName}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              방이름:
              <Chip
                sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                }}
                label={name}
              />
            </div>
            <div>
              방상태:
              <Chip
                sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                }}
                label={status}
              />
            </div>
          </div>
        </TableCell>
      </TableRow>
      <style jsx>
        {`
          :global(.MuiTableCell-root:hover) {
            cursor: pointer;
            background-color: #f5f5f5;
          }
        `}
      </style>
    </>
  );
}
