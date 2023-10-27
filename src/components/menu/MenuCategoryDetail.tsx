import { CoffeeCategory } from '@/constants/coffeeCategory';
import { MenuContext } from '@/context/menu/MenuContext';
import { MenuRs } from '@/dto/menuDto';
import useCallOrder from '@/hooks/menu/useCallOrder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Button, Card, Paper, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
interface Props {
  data?: MenuRs[];
  type?: CoffeeCategory;
}

/* eslint-disable */
function findLocalItems(query: string) {
  let i,
    results = [];
  for (i in localStorage) {
    if (localStorage.hasOwnProperty(i)) {
      if (i.match(query) || (!query && typeof i === 'string')) {
        const value = JSON.parse(localStorage.getItem(i)!);
        results.push({ key: i, val: value });
      }
    }
  }
  return results;
}

export default function MenuCategoryDetail({ type, data }: Props) {
  const [tempState, setTempState] = useState(false);
  const dispatch = useContextSelector(MenuContext, (v) => v[1]);
  const { mutate: callOrder, isLoading: isCallWaiting } = useCallOrder();

  const handleClickOpenMenu = (item: MenuRs) => {
    if (item.stock !== 0) {
      dispatch({ type: 'SET_DRAWER_OPEN', isDrawerOpen: true });
      dispatch({ type: 'SET_MENU', menu: item });
    }
  };

  const renderNoDataUI = () => {
    return <Typography>메뉴가 없습니다.</Typography>;
  };

  const handleOrderRecentMenu = (key: string) => () => {
    if (window.confirm('최근 주문 메뉴를 선택하시겠습니까?')) {
      const { order, menuCode } = JSON.parse(localStorage.getItem(key)!);

      callOrder(
        { order, menuCode },
        {
          onSuccess: (rtnData) => window.alert(rtnData),
          onError: (e) => {
            const err = e as Error;
            window.alert(err.message);
          },
        },
      );
    }
  };

  const renderRecentMenu = useCallback(() => {
    const recentOrders = findLocalItems('coffee_order_');

    if (recentOrders?.length === 0) return renderNoDataUI();

    const handleClickResetRecent = () => {
      if (window.confirm('최근 주문 메뉴를 초기화 하시겠습니까?')) {
        recentOrders.map((i) => {
          localStorage.removeItem(i.key);
        });
        setTempState(!tempState);
      }
    };

    return (
      <Box sx={{ display: 'flex', gap: 1, overflow: 'auto' }}>
        <Button onClick={handleClickResetRecent} variant={'contained'}>
          <DeleteForeverIcon />
        </Button>
        {recentOrders.map((i) => {
          const { key, val } = i as { key: string; val: any };
          const date = key.split('_')[2].split('T')[0];
          return (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Card
                sx={{
                  p: 2,
                  flex: 3,
                  minWidth: 200,
                }}
                variant="outlined"
                onClick={handleOrderRecentMenu(key)}
              >
                <div>{date}</div>
                <div>{val.menuName}</div>
                <div>
                  {Object.entries(val.order?.optionNameList).map(([, v]) => (
                    <li>{`${v}`}</li>
                  ))}
                </div>
                <div>{val.order.phone}</div>
              </Card>
            </Box>
          );
        })}
      </Box>
    );
  }, [tempState]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
      }}
    >
      {type === 'RECENT' ? (
        renderRecentMenu()
      ) : (
        <>
          {data?.length === 0 && renderNoDataUI()}
          {data?.map((item, index) => (
            <Paper
              key={`${item.name}_${item.code}_${index}`}
              elevation={3}
              onClick={() => handleClickOpenMenu(item)}
              sx={[
                {
                  p: 1,
                },
                (theme) => ({
                  backgroundColor: item.stock === 0 ? theme.palette.grey[100] : '',
                  color: item.stock === 0 ? theme.palette.grey[300] : '',

                  '&:hover': {
                    backgroundColor: item.stock === 0 ? theme.palette.grey[300] : theme.palette.primary.contrastText,
                    cursor: item.stock === 0 ? 'not-allowed' : 'pointer',
                    color: item.stock === 0 ? theme.palette.grey[300] : theme.palette.primary.main,
                  },
                }),
              ]}
            >
              {
                <Typography>
                  {item.stock === 0 ? (
                    <>
                      `SOLD OUT`<del>{item.name}</del>
                    </>
                  ) : (
                    item.name
                  )}
                </Typography>
              }
            </Paper>
          ))}
        </>
      )}
    </Box>
  );
}
