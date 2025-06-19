import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../orgamisms/footer';
import Navigation from '../orgamisms/navigation';

export function RootLayout() {

    return (
        <div>
            <ScrollRestoration />
            <div className="p-2 sm:p-4 max-w-360 mx-auto">
                <div className="fixed z-20 bottom-5 md:bottom-auto md:w-full max-w-390 left-1/2 -translate-x-1/2">
                    <Navigation />
                </div>

                <Outlet />
                
                <Footer />
            </div>

        </div>
    );
}
