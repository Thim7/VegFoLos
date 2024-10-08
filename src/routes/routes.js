import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Checkout from '~/pages/Checkout';
import FoodItem from '~/pages/FoodItem';
import Login from '~/pages/Login';
import News from '~/pages/News';
import NewsDetail from '~/pages/NewsDetail';
import Restaurant from '~/pages/Restaurant';
import Restaurants from '~/pages/Restaurants';
import SuccessOrder from '~/pages/SuccessOrder';
import Test from '~/pages/Test';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.restaurants, component: Restaurants },
    { path: config.routes.restaurant, component: Restaurant },
    { path: config.routes.foodItem, component: FoodItem },
    { path: config.routes.checkout, component: Checkout, layout: null },
    { path: config.routes.successOrder, component: SuccessOrder, layout: null },
    { path: config.routes.news, component: News },
    { path: config.routes.newsDetail, component: NewsDetail },
    { path: config.routes.test, component: Test, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
