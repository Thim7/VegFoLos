import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

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
            const bonus = optional?.reduce(
                (accumulator, item) => accumulator + Number(item.toppingPrice.replace(',', '')),
                0,
            );
            if (existingOrder) {
                if (quantity <= 0) {
                    existingOrder.quantity = 0;
                    existingOrder.originalPrice = 0;
                    existingOrder.totalPrice = 0;
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
            const index = state.indexOf(existingOrder);
            if (existingOrder) {
                if (index > -1) state.splice(index, 1);
            }
        },
        orderRemovedAll: (state, action) => {
            state.length = 0;
        },
    },
});

export const {
    orderAdded,
    orderQuantityUpdated,
    orderOptionalUpdated,
    orderNoteUpdated,
    orderRemoved,
    orderRemovedAll,
} = ordersSlice.actions;

export default ordersSlice.reducer;
