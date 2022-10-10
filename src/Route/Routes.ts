import Basket from "../Pages/Basket";
import Main from "../Pages/Main";
import Product from "../Pages/Product";
import Profile from "../Pages/Profile";
import Statistic from "../Pages/Statistic";

export const MAIN_ROUTE = '/';
export const BASKET_ROUTE = '/basket';
export const PRODUCT_ROUTE = '/product';
export const PROFILE_ROUTE = '/profile';
export const STATISTIC_ROUTE = '/statistic';
export const UPLOAD_ITEM = '/profile/upload';

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        element: Basket
    },
    {
        path: PROFILE_ROUTE,
        element: Profile
    },
    {
        path: STATISTIC_ROUTE,
        element: Statistic
    },
    {
        path: UPLOAD_ITEM,
        element: Profile
    }
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: Main
    },
    {
        path: PRODUCT_ROUTE,
        element: Product
    }
]