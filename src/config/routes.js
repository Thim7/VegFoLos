const routes = {
    home: '/',
    login: '/login',
    restaurants: '/restaurants',
    restaurant: '/:title',
    foodItem: '/:restaurant/@:foodName',
    checkout: '/checkout',
    successOrder: '/successOrder',
    news: '/news',
    newsDetail: '/@:newTitle',
    test: '/test',
};

export default routes;
