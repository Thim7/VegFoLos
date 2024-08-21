import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import ordersSlice from '~/features/orders/ordersSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    orders: ordersSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk],
});

export const persistor = persistStore(store);
