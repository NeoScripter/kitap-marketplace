import clsx from "clsx";
import logo from '@/assets/images/footer-min.webp';
import { Input } from "@headlessui/react";
import { SearchIcon } from "lucide-react";

type SearchProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
}

export default function Search({ value, className, setValue }: SearchProps) {
    return <div className={clsx("bg-black rounded-xl p-2.5 my-3 flex gap-2 items-center h-13", className)}>
        <div className='size-8 mx-1'>
            <img src={logo} alt="lorem" className='size-full object-center object-contain' />
        </div>

        <div className="flex-1 relative h-full">
            <Input value={value} onChange={(e) => setValue(e.target.value)} className="bg-white w-full rounded-sm px-2 h-full" placeholder='Найти товары' />

            <SearchIcon className="text-black size-5 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

    </div>

}
