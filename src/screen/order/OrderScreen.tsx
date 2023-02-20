import { useContextSelector } from 'use-context-selector';
import { OrderContext, OrderView } from '@/context/order/OrderContext';
import OrderPhoneScreen from '@/screen/order/OrderPhoneScreen';
import OrderChooseScreen from '@/screen/order/OrderChooseScreen';
import OrderFinishScreen from '@/screen/order/OrderFinishScreen';

export default function OrderScreen() {
  const { view } = useContextSelector(OrderContext, (v) => v[0]);

  const renderView = () => {
    if (view === OrderView.TYPE_PHONE) {
      return <OrderPhoneScreen />;
    }
    if (view === OrderView.CHOOSE_ORDER) {
      return <OrderChooseScreen />;
    }
    if (view === OrderView.FINISH_ORDER) {
      return <OrderFinishScreen />;
    }
    return <></>;
  };

  return <>{renderView()}</>;
}
