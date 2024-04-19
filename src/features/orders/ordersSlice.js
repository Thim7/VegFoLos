import { createSlice } from '@reduxjs/toolkit';
import images from '~/assets/img';
const initialState = [
    // { id: '', img: '', foodName: '', quantity: 1, originalPrice: 0, totalPrice: 0, note: '', optional: [] },
];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded: {
            reducer(state, action) {
                const existingOrder = state.find((order) => order.title);
                console.log(existingOrder);
                if (existingOrder && action.payload.title !== existingOrder.title) {
                    state.forEach((item) => (item = null));
                    state.length = 0;
                    state.push(action.payload);
                } else {
                    state.push(action.payload);
                }
            },
        },
        orderQuantityUpdated: (state, action) => {
            const { id, quantity, optional } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            const bonus = optional.reduce(
                (accumulator, item) => accumulator + Number(item.toppingPrice.replace(',', '')),
                0,
            );
            if (existingOrder) {
                if (quantity <= 0) {
                    existingOrder.quantity = 0;
                    existingOrder.originalPrice = existingOrder.originalPricePerUnit + bonus;
                    existingOrder.totalPrice = existingOrder.salePrice + bonus;
                    return;
                }
                existingOrder.quantity = quantity;
                existingOrder.originalPrice = (existingOrder.originalPricePerUnit + bonus) * quantity;
                existingOrder.totalPrice = (existingOrder.salePrice + bonus) * quantity;
            }
        },
        orderOptionalUpdated: (state, action) => {
            const { id, optional } = action.payload;
            const existingOrder = state.find((order) => order.id === id);
            if (existingOrder) {
                existingOrder.optional = optional;
                existingOrder.originalPrice += optional;
                existingOrder.totalPrice += optional;
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
