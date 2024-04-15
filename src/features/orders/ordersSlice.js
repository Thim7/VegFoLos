import { createSlice } from '@reduxjs/toolkit';
import images from '~/assets/img';
const initialState = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded: (state, action) => {
            state.push(action.payload);
        },
        orderQuantityUpdated: (state, action) => {
            const { id, quantity } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            if (existingOrder) {
                existingOrder.quantity = quantity;
            }
        },
        orderOptionalUpdated: (state, action) => {
            const { id, optional } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            if (existingOrder) {
                existingOrder.optional = optional;
            }
        },
        orderNoteUpdated: (state, action) => {
            const { id, note } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            if (existingOrder) {
                existingOrder.note = note;
            }
        },
        orderRemoved: (state, action) => {
            const { id } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            if (existingOrder) {
                state.splice(existingOrder, 1);
            }
        },
    },
});

export const { orderAdded, orderQuantityUpdated, orderOptionalUpdated, orderNoteUpdated, orderRemoved } =
    ordersSlice.actions;

export default ordersSlice.reducer;
