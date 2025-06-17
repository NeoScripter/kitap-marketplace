import logo from '@/assets/images/icon.svg';
import MobileHero from '@/assets/images/hero-mb-min.webp';
import { Input } from '@headlessui/react';
import ItemCategory from '../atoms/item-category';
import { useState } from 'react';
import { products } from '@/lib/data/items';
import Item from '../atoms/item';

const categories = [
    "игровые ноутбуки",
    "ультрабуки",
    "Рабочие станции",
    "для офиса",
    "для дома"
];

export default function Main() {
    const [selectedCategory, setSelectedCategory] = useState(0);

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

        <div className='scrollbar-hidden overflow-x-auto px-3 -mx-3'>
            <div className="my-6 sm:my-8 flex items-center gap-3 w-max mx-auto md:gap-5">
                {categories.map((cat, idx) => (
                    <ItemCategory key={`item-category-${idx + 1}`} content={cat} isActive={idx === selectedCategory} onClick={() => setSelectedCategory(idx)} />
                ))}
            </div>

        </div>

        <section className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-3 md:gap-5">
            {products.map((pr, idx) => (
                <Item key={`item-${idx + 1}`} item={pr} />
            ))}
        </section>
    </div>
}

