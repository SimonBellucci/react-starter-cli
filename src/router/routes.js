/* PLOP_INJECT_IMPORT */
import Items from '../pages/Items/Items';
import Formation from '../pages/Formation/Formation';
import User from '../pages/User/User';
import Product from '../pages/Product/Product';
import Home from '../pages/Home/Home';

const routes = [
    /* PLOP_INJECT_OBJECT */
    {
        path: "/items/:id",
        component: Items
    },
    {
        path: "/items",
        component: Items
    },
    {
        path: "/formation",
        component: Formation
    },
    {
        path: "/user/:id",
        component: User
    },
    {
        path: "/user",
        component: User
    },
    {
        path: "/product/:id",
        component: Product
    },
    {
        path: "/product",
        component: Product
    },
    {
        path: "/",
        component: Home
    },
];

export default routes;