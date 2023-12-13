import { useRouter } from 'next/router';
import useQueryGetRoomInfo from '@/hooks/room/useQueryGetRoomInfo';
import { Avatar, Button, Checkbox, Chip, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/muiAvatar';
import { Loading } from '@/components/common';
import RoomDetailInfo from '@/components/room/detail/RoomDetailInfo';
import useMutationPayment from '@/hooks/payment/useMutationPayment';
import { useState } from 'react';
import useSendSlack from '@/hooks/slack/useSendSlack';
import DeleteIcon from '@mui/icons-material/Delete';
import useMutationDeleteOrder from '@/hooks/order/useMutationDeleteOrder';
import useQueryGetMember from '@/hooks/member/useQueryGetMember';
import useMutationCloseRoom from '@/hooks/room/useMutationCloseRoom';
import useMutationLeaveRoom from '@/hooks/room/useMutationLeaveRoom';

export default function RoomDetailScreen() {
  const [checkedOrderList, setCheckedOrderList] = useState([0]);

  const router = useRouter();
  const { roomSn } = router.query;

  const { sendSlack } = useSendSlack();

  const {
    data: roomInfo,
    isLoading: isLoadingRoomInfo,
    refetch: getRoomInfo,
  } = useQueryGetRoomInfo({
    req: { roomSn: Number(roomSn) },
    queryOption: {
      onSuccess: (response) => {
        setCheckedOrderList(response.orderList.map((i) => i.orderSn));
      },
      onError: (error) => {
        window.alert(error.message);
        router.replace('/room');
      },
    },
  });

  const { data: userInfo, isLoading: isLoadingMember } = useQueryGetMember({ req: undefined });

  const { mutate: payment } = useMutationPayment({});
  const { mutate: deleteOrder } = useMutationDeleteOrder({});
  const { mutate: closeRoom } = useMutationCloseRoom({});
  const { mutate: leaveRoom } = useMutationLeaveRoom({});

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

  const handleClickDeleteOrder = (orderSn: number) => {
    if (window.confirm('주문을 삭제하시겠습니까?')) {
      deleteOrder(
        { roomSn: Number(roomSn), orderSn },
        {
          onSuccess: () => {
            window.alert('주문이 삭제되었습니다.');
            getRoomInfo();
          },
          onError: (error) => {
            window.alert(error.message);
          },
        },
      );
    }
  };

  const handleClickLeaveRoom = () => {
    if (window.confirm('방을 나가시겠습니까?')) {
      leaveRoom(
        { roomSn: Number(roomSn) },
        {
          onSuccess: () => {
            window.alert('방을 나갔습니다.');
            router.push('/room');
          },
          onError: (error) => {
            window.alert(error.message);
          },
        },
      );
    }
  };
  const handleClickCloseRoom = () => {
    if (window.confirm('방을 닫으시겠습니까?')) {
      closeRoom(
        { roomSn: Number(roomSn) },
        {
          onSuccess: () => {
            window.alert('방을 닫았습니다.');
            router.push('/room');
          },
          onError: (error) => {
            window.alert(error.message);
          },
        },
      );
    }
  };

  if (isLoadingRoomInfo || isLoadingMember) return <Loading />;

  if (roomInfo && userInfo)
    return (
      <>
        <div className={'wrapper'}>
          <div className={'room-info-wrapper'}>
            <Typography>ROOM INFO</Typography>
            <Button
              variant={'contained'}
              // TODO @brady change to isHost
              onClick={userInfo.nickname !== roomInfo.room.hostName ? handleClickLeaveRoom : handleClickCloseRoom}
            >
              {
                // TODO @brady change to isHost
                userInfo.nickname !== roomInfo.room.hostName ? 'Leave Room' : 'Close Room'
              }
            </Button>
          </div>
          <div className={'room-wrapper'}>
            <RoomDetailInfo data={roomInfo.room} />
          </div>

          <Typography color={'secondary'}>ROOM MEMBERS</Typography>
          <div className={'avatar-wrapper'}>
            {roomInfo?.memberList.map((member) => (
              <div className={'avatar'} key={`${member.memberSn}_member_key`}>
                <Avatar {...stringAvatar(member.nickname)} />
                <div>{member.nickname}</div>
              </div>
            ))}
          </div>
          <Typography>ORDER LIST</Typography>

          <div className={'order-wrapper'}>
            {roomInfo.orderList.map((order) => {
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
                  <div className={'order-item-wrapper'}>
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
                    </div>
                    <div>
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
                    </div>
                    <div>
                      <span className={''}>X{quantity}</span>
                      <span className={'delete-icon'} onClick={() => handleClickDeleteOrder(order.orderSn)}>
                        <DeleteIcon fontSize={'small'} color={'error'} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={'payment-wrapper'}>
            <Button onClick={handleClickPayment} variant="contained">
              결제하기
            </Button>
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
          .order-item-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
          }
          .delete-icon {
            cursor: pointer;
            height: 20px;
          }
          .delete-icon:hover {
            transform: scale(1.2);
          }
          .room-info-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}</style>
      </>
    );
  return <Loading />;
}
