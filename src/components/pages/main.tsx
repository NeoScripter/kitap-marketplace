import logo from '@/assets/images/icon.svg';
import MobileHero from '@/assets/images/hero-mb-min.webp';
import { Input } from '@headlessui/react';

export default function Main() {
    return <div className="mx-auto">
        <div className="my-3 flex sm:mb-5 gap-2 items-center h-11">
            <div className='size-11'>
                <img src={logo} alt="lorem" className='size-full object-center' />
            </div>

            <div className="bg-black rounded-xl p-2 flex-1 h-full">
                <Input className="bg-white w-full rounded-sm px-2 h-full" placeholder='Найти товары' />
            </div>

        </div>
        <div className="">
            <img src={MobileHero} alt="" className='size-full object-center object-contain' />
        </div>

        <div className="my-4 sm:my-8 flex items-center gap-3">
            items section
        </div>
    </div>
}
