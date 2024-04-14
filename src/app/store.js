import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from '~/features/orders/ordersSlice';
export const store = configureStore({
    reducer: {
        orders: ordersSlice,
    },
});
