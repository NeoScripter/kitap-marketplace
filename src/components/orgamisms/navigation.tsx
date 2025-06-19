import clsx from "clsx";
import { Boxes, Heart, House, Percent, ShoppingBag, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type navItem = {
    path: string;
    label: React.ReactNode;
}
const navItems: navItem[] = [
    {
        path: '/',
        label: <House className="text-white" />
    },
    {
        path: '/discounts',
        label: <Percent className="text-white" />
    },
    {
        path: '/favorites',
        label: <Heart className="text-white" />
    },
    {
        path: '/catalog',
        label: <Boxes className="text-white" />
    },
    {
        path: '/cart',
        label: <ShoppingBag className="text-white" />
    },
    {
        path: '/account',
        label: <UserRound className="text-white" />
    }
];


export default function Navigation() {
    const { pathname } = useLocation();

    return <ul className="md:w-15 bg-black md:flex-col rounded-xl md:px-2 md:py-3 flex items-center justify-center gap-4 py-2 px-4" style={{pointerEvents: 'all'}}>
        {navItems.map((navItem, idx) => (
            <li key={`header-nav-item-${idx + 1}`} className={clsx("aspect-square transition-colors duration-200 ease-in hover:bg-white/15 flex items-center justify-center p-1 rounded-sm", pathname === navItem.path && "bg-white/20")}>
                <Link to={navItem.path}>{navItem.label}</Link>
            </li>
        ))}       
    </ul>
}
