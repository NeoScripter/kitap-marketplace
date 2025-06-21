import clsx from "clsx";
import { CheckIcon } from "lucide-react";

type DeliveryItemProps = {
    isActive: boolean;
    onClick: () => void;
    title: string;
    headline: string;
    price: string;
}

export default function DeliveryItem({ isActive, onClick, title, headline, price }: DeliveryItemProps) {
    return (
        <button onClick={onClick} className={clsx("cursor-pointer text-left w-50 bg-white font-black uppercase p-2 rounded-xl border-2 font-display", isActive ? "border-green-400" : "border-transparent")}>
            <p className="font-black text-black mb-2 uppercase text-sm font-display">{title}</p>

            <div className="flex items-center justify-between">
                <div className="text-[0.6rem]">
                    <p>{headline}</p>
                    <p className="text-green-500 ">{price}</p>
                </div>
                <div className={clsx("size-6 rounded-sm flex items-center justify-center bg-slate-800")}>
                    <CheckIcon className={clsx("size-5 text-white", !isActive && "opacity-0")}/>
                </div>

            </div>
        </button>
    )
}

