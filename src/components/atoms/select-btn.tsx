import clsx from "clsx";

type SelectBtnProps = {
    isActive: boolean;
    label: string;
    onClick: () => void;
}

export function SelectBtn({ isActive, label, onClick }: SelectBtnProps) {
    return <button onClick={onClick} className={clsx("rounded-full text-xs xl:text-sm text-white border-2 cursor-pointer font-display font-black py-1 px-5 uppercase", isActive ? 'border-green-600' : 'border-white')}>{label}</button>
}
