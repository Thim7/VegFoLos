import { createSlice } from '@reduxjs/toolkit';
import images from '~/assets/img';
const initialState = [
    {
        id: 1,
        img: images.blogImage2,
        foodName: 'Salad & Italian bread',
        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
        sale: 5000,
        originalPrice: 55000,
        totalPrice: 50000,
        optional: [
            {
                toppingName: 'Tomato',
                toppingPrice: 10000,
            },
            {
                toppingName: 'Cucumber',
                toppingPrice: 5000,
            },
        ],
    },
];

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
