import { useCallback, useState } from 'react';
import { Box, Button, Card } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

export default function RecentMenu() {
  const [tempState, setTempState] = useState(false);

  const handleOrderRecentMenu = (key: string) => () => {
    if (window.confirm('최근 주문 메뉴를 선택하시겠습니까?')) {
      const { order, menuCode } = JSON.parse(localStorage.getItem(key)!);

      // callOrder({ order, menuCode }, {});
    }
  };
  const renderRecentMenu = useCallback(() => {
    const recentOrders = findLocalItems('coffee_order_');

    // if (recentOrders?.length === 0) return renderNoDataUI();

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
                <div>{val.order?.optionNameList && Object.entries(val.order?.optionNameList).map(([, v]) => <li>{`${v}`}</li>)}</div>
                <div>{val.order.phone}</div>
              </Card>
            </Box>
          );
        })}
      </Box>
    );
  }, [tempState]);
}
