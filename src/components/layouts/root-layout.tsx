import { Outlet, ScrollRestoration } from 'react-router-dom';

export function RootLayout() {

    return (
        <div>
            <ScrollRestoration />
            <div className="p-2 sm:p-4 max-w-360 mx-auto">
                <Outlet />

            </div>

        </div>
    );
}
