import clsx from "clsx";

type ItemCategoryProps = {
    content: string;
    isActive: boolean;
    onClick: () => void;
}

export default function ItemCategory({ content, isActive, onClick }: ItemCategoryProps) {
    return <button onClick={onClick} className={clsx('border-2 border-black transition-colors leading-1.2 duration-300 ease-in uppercase py-1.5 px-4 sm:py-2 text-center cursor-pointer rounded-full font-bold text-xs font-headings', isActive ? 'bg-black text-white' : 'bg-white text-black')}>{content}</button>
}
