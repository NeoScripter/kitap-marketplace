import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles.css';
import '@/assets/fonts/fonts.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/router';
import { CartProvider } from './lib/providers/shopping-card-provider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={createBrowserRouter(routes)} />
        </CartProvider>
    </StrictMode>,
)
