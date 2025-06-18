import logo from '@/assets/images/icon.svg';
import Hero1 from '@/assets/images/hero-1-min.webp'
import Hero2 from '@/assets/images/hero-2-min.webp'
import HeroMain from '@/assets/images/hero-dkt-min.webp';
import HeroMask from '@/assets/images/hero-mask-min.webp';
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
        <div className="my-3 flex md:hidden sm:mb-5 gap-2 items-center h-11">
            <div className='size-11'>
                <img src={logo} alt="lorem" className='size-full object-center' />
            </div>

            <div className="bg-black rounded-xl p-2 flex-1 h-full">
                <Input className="bg-white w-full rounded-sm px-2 h-full" placeholder='Найти товары' />
            </div>

        </div>
        <section className="font-headings text-white">
            <div className='hidden md:flex gap-4 font-bold'>
                <div className='flex flex-col items-start justify-between uppercase relative basis-4/5 bg-right bg-contain bg-no-repeat' style={{ backgroundImage: `url(${HeroMain})` }}>
                    <div className='px-[6vw] mt-[5vw] xl:px-25 xl:mt-18'>
                        <h1 className='text-[3vw] leading-[4vw] xl:leading-18 xl:text-[2.5rem] mb-4'>открой для себя новое</h1>
                        <p className="text-[5.35vw] xl:text-7xl xl:leading-20 leading-[6vw] w-7/10 font-black">вместе с asus rog scar 18</p>
                    </div>
                    <div className="absolute z-10 top-5 bottom-0 right-5">
                        <img src={HeroMask} alt="" className='size-full object-contain object-right' />
                    </div>

                    <div className="ml-[3.5%] mr-[52%] xl:ml-11 xl:mr-40 bg-black rounded-3xl px-[2%] py-[1%]">
                        <p className="font-bold mb-1 2xl:text-[1.9rem] xl:leading-10 text-[2vw] leading-[2.6vw]">
                            Найди себе идеальный <br/> ноутбук для своих задач
                        </p>
                        <div className="p-2 font-display">
                            <Input className="bg-white w-full text-black !normal-case rounded-sm px-2 h-full" placeholder='Найти товары' />
                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-3 basis-1/5'>
                    <div className='overflow-clip aspect-square rounded-3xl bg-black'>
                        <img src={Hero1} alt="" className='size-2/3 mx-auto my-3 object-center object-contain' />
                        <p className="text-white font-medium font-headings uppercase text-center">ОТ 59 999 Р</p>
                    </div>
                    <div className='overflow-clip aspect-square rounded-3xl bg-black'>
                        <img src={Hero2} alt="" className='size-2/3 mx-auto my-3 object-center object-contain' />
                        <p className="text-white font-medium font-headings uppercase text-center">ОТ 159 999 Р</p>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <img src={MobileHero} alt="" className='size-full object-center object-contain' />
            </div>
        </section>

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

