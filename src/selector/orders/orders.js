export const getTotalPriceInCart = (state) => {
    const orders = state.orders;
    let result = 0;
    const priceArr = orders.map((order) => order.totalPrice);
    priceArr.forEach((item) => (result += item));
    return result;
};

export const getOrdersInCart = (state) => state.orders;
