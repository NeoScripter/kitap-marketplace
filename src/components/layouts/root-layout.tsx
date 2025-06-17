import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../orgamisms/footer';
import Navigation from '../orgamisms/navigation';

export function RootLayout() {

    return (
        <div>
            <ScrollRestoration />
            <div className="p-2 sm:p-4 max-w-360 mx-auto">
                <Navigation />

                <Outlet />
                
                <Footer />
            </div>

        </div>
    );
}
