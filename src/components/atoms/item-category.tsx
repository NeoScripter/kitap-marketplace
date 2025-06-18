import clsx from "clsx";

type ItemCategoryProps = {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    className? : string;
}

export default function ItemCategory({ children, isActive, onClick, className }: ItemCategoryProps) {
    return <button onClick={onClick} className={clsx('border-2 border-black shadow-md transition-colors leading-1.2 duration-300 ease-in uppercase py-1.5 px-4 sm:py-2 text-center cursor-pointer rounded-full font-bold text-xs font-square', className, isActive ? 'bg-black text-white' : 'bg-white text-black')}>{children}</button>
}
