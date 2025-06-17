import { RootLayout } from '@/components/layouts/root-layout';
import Catalog from '@/components/pages/catalog';
import Main from '@/components/pages/main';


export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main/> },
            { path: 'catalog', element: <Catalog /> },
        ],
    },
    { path: '*', element: <h1>Not found</h1> },
];

