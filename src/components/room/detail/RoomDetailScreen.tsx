import { useRouter } from 'next/router';
import useQueryGetRoomInfo from '@/hooks/room/useQueryGetRoomInfo';
import { Avatar, Button, Checkbox, Chip, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/muiAvatar';
import { Loading } from '@/components/common';
import RoomDetailInfo from '@/components/room/detail/RoomDetailInfo';
import useMutationPayment from '@/hooks/payment/useMutationPayment';
import { useState } from 'react';
import useSendSlack from '@/hooks/slack/useSendSlack';

export default function RoomDetailScreen() {
  const [checkedOrderList, setCheckedOrderList] = useState([0]);
  const router = useRouter();
  const { roomSn } = router.query;
  const { sendSlack } = useSendSlack();
  const { data, isLoading } = useQueryGetRoomInfo({
    req: { roomSn: Number(roomSn) },
    queryOption: {
      onSuccess: (response) => {
        setCheckedOrderList(response.orderList.map((i) => i.orderSn));
      },
    },
  });
  const { mutate: payment } = useMutationPayment({});

  const handleClickPayment = () => {
    if (checkedOrderList.length === 0) return window.alert('결제할 주문을 선택해주세요.');

    if (window.confirm(`방번호:${roomSn} 결제하시겠습니까?`)) {
      payment(
        { roomSn: Number(roomSn), orderSnList: checkedOrderList },
        {
          onSuccess: (result) => {
            window.alert(`결제가 완료되었습니다.\n 주문번호: ${result.orderNo}`);
            sendSlack(`주문번호: ${result.orderNo}`);
          },
          onError: (error) => {
            window.alert(error.message);
            sendSlack(JSON.stringify(error));
          },
        },
      );
    }
  };

  const handleChangeOrderItemCheck = (orderSn: number, checked: boolean) => {
    if (checked) {
      setCheckedOrderList((prev) => [...prev, orderSn]);
    } else {
      setCheckedOrderList((prev) => prev.filter((i) => i !== orderSn));
    }
  };

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <div className={'wrapper'}>
          <Typography>ROOM INFO</Typography>
          <div className={'room-wrapper'}>
            <RoomDetailInfo data={data.room} />
          </div>

          <Typography color={'secondary'}>ROOM MEMBERS</Typography>
          <div className={'avatar-wrapper'}>
            {data?.memberList.map((member) => (
              <div className={'avatar'} key={`${member.memberSn}_member_key`}>
                <Avatar {...stringAvatar(member.nickname)} />
                <div>{member.nickname}</div>
              </div>
            ))}
          </div>
          <Typography>ORDER LIST</Typography>

          <div className={'order-wrapper'}>
            {data.orderList.map((order) => {
              const { menu, optionList, memberNickname, memberSn, quantity } = order;
              const { name: menuName, optionGroupList } = menu;
              const includeOptionList = optionGroupList.flatMap((i) => i.optionList).filter((j) => optionList.includes(j.code));
              return (
                <div className={'order-item'} key={`${order.memberSn}_order_item`}>
                  <div className={'avatar-item-wrapper'}>
                    <Checkbox
                      defaultChecked
                      value={order.orderSn}
                      onChange={(_e, checked) => handleChangeOrderItemCheck(order.orderSn, checked)}
                    />
                    <Avatar {...stringAvatar(memberNickname)} />
                  </div>
                  <div>
                    <Chip
                      sx={{
                        height: 'auto',
                        '& .MuiChip-label': {
                          display: 'block',
                          whiteSpace: 'normal',
                        },
                      }}
                      label={menuName}
                    />
                    {includeOptionList.map((i) => (
                      <Chip
                        key={`${memberSn}_${i.code}_option`}
                        sx={{
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                          },
                        }}
                        label={i.name}
                      />
                    ))}
                    <span> X {quantity}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={'payment-wrapper'} onClick={handleClickPayment}>
            <Button variant="contained">결제하기</Button>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
          }

          .avatar-wrapper {
            display: flex;
            flex-direction: row;
            gap: 8px;
            width: 100%;
            overflow: auto;
          }

          .avatar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 8px;
            font-size: 0.8rem;
          }

          .room-wrapper {
            padding: 8px;
          }

          .order-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            border: 1px solid lightgray;
          }
          .avatar-item-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4px;
          }
          .avatar {
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        `}</style>
      </>
    );
  return <Loading />;
}
