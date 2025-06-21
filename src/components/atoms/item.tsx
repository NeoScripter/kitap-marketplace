import type { Product } from "@/lib/data/items";
import bag from '@/assets/images/bag.svg';
import { Link } from "react-router-dom";
import { useCartContext } from "@/lib/hooks/use-cart-context";
import clsx from "clsx";

type ItemProps = {
    item: Product;
}

export default function Item({ item }: ItemProps) {
    const { cart, add, remove } = useCartContext();
    const isAdded = cart.find(cartItem => cartItem.id === item.id);

    function handleItemClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();

        if (isAdded) {
            remove(item.id);
        } else {
            add(item.id);
        }
    }
    return (
        <div className='p-3 shadow-xl bg-black rounded-lg'>
            <div className="block aspect-square rounded-lg bg-white relative mb-2">
                <Link to={`/product/${item.id}`}>
                    <img src={item.images[0]} alt="" className='size-full block object-center object-cover' />
                </Link>

                <button onClick={handleItemClick} className={clsx('cursor-pointer aspect-square rounded-full flex items-center justify-center p-3 border-5 border-black z-10 absolute -right-2 -bottom-5 transition-scale duration-150 ease-in hover:scale-105', isAdded ? 'bg-blue-400' : 'bg-white')}>
                    <img src={bag} alt="" className='object-contain size-full' />
                </button>
            </div>

            <p className='font-bold mb-1 text-white'>{item.price} ₽</p>

            <p className='text-gray-300 text-xs'>{item.name}</p>
        </div>
    )
}
