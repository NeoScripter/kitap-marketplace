import { RootLayout } from '@/components/layouts/root-layout';
import Account from '@/components/pages/account';
import Cart from '@/components/pages/cart';
import Catalog from '@/components/pages/catalog';
import Checkout from '@/components/pages/checkout';
import Discounts from '@/components/pages/discounts';
import Favorites from '@/components/pages/favorites';
import Main from '@/components/pages/main';
import Product from '@/components/pages/product';


export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main/> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'discounts', element: <Discounts/> },
            { path: 'favorites', element: <Favorites /> },
            { path: 'cart', element: <Cart /> },
            { path: 'account', element: <Account /> },
            { path: 'checkout', element: <Checkout/> },
            { path: 'product/:id', element: <Product /> },
        ],
    },
    { path: '*', element: <h1>Not found</h1> },
];

