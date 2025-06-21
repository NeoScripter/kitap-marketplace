import clsx from "clsx";

type DayItemProps = {
    isActive: boolean;
    onClick: () => void;
    day: string;
    price: string;
    time: string;
}

export default function DayItem({ isActive, onClick, day, time, price }: DayItemProps) {
    return (
        <div className="flex text-sm gap-4 flex-col justify-between">
            <button onClick={onClick} className={clsx("cursor-pointer w-40 bg-white font-black uppercase p-2 rounded-xl border-2 font-display", isActive ? "border-green-400" : "border-transparent")}>
                <p className="font-black text-black uppercase text-sm font-display">{day}</p>

                <p className="text-sm text-gray-500">{price}</p>
            </button>
    
            <div className="w-40 text-center bg-white font-black uppercase p-2 rounded-xl border-2 font-display">
                {time}
            </div>
        </div>
    )
}

