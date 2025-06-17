import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../orgamisms/footer';

export function RootLayout() {

    return (
        <div>
            <ScrollRestoration />
            <div className="p-2 sm:p-4 max-w-360 mx-auto">
                <Outlet />
                
                <Footer />
            </div>

        </div>
    );
}
