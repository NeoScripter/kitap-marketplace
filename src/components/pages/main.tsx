import Hero1 from '@/assets/images/hero-1-min.webp'
import Hero2 from '@/assets/images/hero-2-min.webp'
import HeroMain from '@/assets/images/hero-new.png';
import MobileHero from '@/assets/images/hero-mb-min.webp';
import { Input } from '@headlessui/react';
import ItemCategory from '../atoms/item-category';
import { useState } from 'react';
import { categories, products } from '@/lib/data/items';
import ItemList from '../molecules/item-list';
import Search from '../atoms/search';
import { SearchIcon } from 'lucide-react';

export default function Main() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const sortedItems = products.filter(p => p.category === categories[selectedCategory] && p.name.startsWith(searchInput));
    return <div>

        <Search className='md:hidden sm:mb-5' value={searchInput} setValue={setSearchInput} />
        <section className="font-headings text-white">
            <div className='hidden md:flex gap-4 font-bold'>
                <div className='flex flex-col items-start justify-between uppercase relative basis-4/5 bg-right bg-contain bg-no-repeat' >
                    <div className="absolute inset-0 z-10">
                        <img src={HeroMain} alt="" className='size-full object-center object-contain' />
                    </div>
                    {/* <div className='px-[6vw] mt-[5vw] xl:px-25 xl:mt-18'> */}
                    {/*     <h1 className='text-[3vw] leading-[4vw] xl:leading-18 xl:text-[2.5rem] mb-4'>открой для себя новое</h1> */}
                    {/*     <p className="text-[5.35vw] xl:text-7xl xl:leading-20 leading-[6vw] w-7/10 font-black">вместе с asus rog scar 18</p> */}
                    {/* </div> */}
                    {/* <div className="absolute z-10 top-5 bottom-0 right-5"> */}
                    {/*     <img src={HeroMask} alt="" className='size-full object-contain object-right' /> */}
                    {/* </div> */}

                    <div className="mt-auto mb-9 xl:mb-11 shadow-xl bg-primary-gray rounded-3xl px-[2%] py-[1%]">
                        <p className="font-bold mb-1 2xl:text-[1.9rem] xl:leading-10 text-[2vw] leading-[2.6vw]">
                            Найди себе идеальный <br /> ноутбук для своих задач
                        </p>
                        <div className="p-2 relative font-display">
                            <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="bg-white w-full text-black !normal-case rounded-sm px-2 h-full" placeholder='Найти товары' />
                            <SearchIcon className="text-black size-5 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-3 xl:gap-5 basis-1/5'>
                    <div className='overflow-clip aspect-square mt-3 shadow-xl rounded-3xl bg-primary-gray'>
                        <img src={Hero1} alt="" className='size-2/3 mx-auto my-3 object-center object-contain' />
                        <p className="text-white font-medium font-headings uppercase text-center">ОТ 59 999 Р</p>
                    </div>
                    <div className='overflow-clip mb-10 aspect-square shadow-xl rounded-3xl bg-primary-gray'>
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
            <div className="my-6 md:mt-0 sm:mb-8 flex items-center gap-3 w-max mx-auto md:gap-5">
                {categories.map((cat, idx) => (
                    <ItemCategory key={`item-category-${idx + 1}`} isActive={idx === selectedCategory} onClick={() => setSelectedCategory(idx)} >{cat}</ItemCategory>
                ))}
            </div>

        </div>

        <ItemList products={sortedItems} />
    </div>
}

