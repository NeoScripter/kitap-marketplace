import type { Product } from "@/lib/data/items";
import bag from '@/assets/images/bag.svg';

type ItemProps = {
    item: Product;
}

export default function Item({item}: ItemProps) {

    return (
        <div className='p-3 bg-black rounded-lg'>
            <div className="aspect-square rounded-lg bg-white relative mb-2">
                <img src={item.images[0]} alt="" className='size-full object-center object-cover'/>

                <button className='cursor-pointer aspect-square rounded-full flex items-center justify-center bg-white p-3 border-5 border-black z-10 absolute -right-2 -bottom-5 transition-scale duration-150 ease-in hover:scale-105'>
                    <img src={bag} alt="" className='object-contain size-full' />
                </button>
            </div>

            <p className='font-bold mb-1 text-white'>{item.price} ₽</p>

            <p className='text-gray-300 text-xs'>{item.name}</p>
        </div>
    )
}
