import OrderScreen from '@/screen/order/OrderScreen';
import { OrderContext, useOrderValue } from '@/context/order/OrderContext';

export default function OrderPage() {
  return (
    <OrderContext.Provider value={useOrderValue()}>
      <OrderScreen />
    </OrderContext.Provider>
  );
}
