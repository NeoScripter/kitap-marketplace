import { products, type Product } from "@/lib/data/items";
import ItemList from "../molecules/item-list";
import { useCartContext } from "@/lib/hooks/use-cart-context";
import { CheckIcon, HeartIcon, Minus, Plus, Trash, XIcon, Zap } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, add, remove, deduct } = useCartContext();
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const suggested = products.filter((_, i) => i % 4 === 0);

    const itemsMessage = (qnt: number) => {
        if (qnt === 0) {
            return 'нет товаров';
        } else if (qnt === 1) {
            return '1 товар';
        } else if (qnt > 1 && cart.length < 5) {
            return `${qnt} товара`;
        } else {
            return `${qnt} товаров`;
        }
    };

    const cartProducts = products.filter(product => cart.find(cartItem => cartItem.id === product.id));

    const selectedPrice = cartProducts.reduce((acc, cartItem) => {
        const quantity = cart.find(item => item.id === cartItem.id)?.quantity ?? 1;
        return acc + (selectedIds.includes(cartItem.id) ? cartItem.price * quantity : 0);
    }, 0);

    function selectAll() {
        setSelectedIds(cartProducts.map(p => p.id));
    }
    function toggleItem(id: number) {
        setSelectedIds(prev => {
            if (prev.includes(id)) {
                return prev.filter(itemId => itemId !== id);
            } else {
                return [...prev, id];
            }
        })
    }

    function handleCheckoutClick() {
        localStorage.setItem('checkout-price', JSON.stringify(selectedPrice));
    }
    return (
        <div className="mt-2">
            <div className="bg-primary-gray/60 font-black font-display uppercase text-white -mx-2 -mt-4 p-6 rounded-b-2xl md:rounded-3xl md:bg-primary-gray md:mx-0 md:mt-0">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-xl">Корзина </h1>
                    <div className="text-gray-400 text-lg">{itemsMessage(cart.length)}</div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <button onClick={selectAll} className="flex items-center gap-2 cursor-pointer">
                        <div className={clsx("size-6 rounded-sm flex items-center justify-center", selectedIds.length === cartProducts.length && selectedIds.length !== 0 ? "bg-slate-800" : "bg-white")}>
                            <CheckIcon className="size-5 text-gray-400" />
                        </div>
                        <span className="text-sm">Выбрать все</span>
                    </button>
                    <button onClick={() => setSelectedIds([])} className="cursor-pointer flex items-center gap-2">
                        <div className="size-6 rounded-sm flex items-center bg-gray-400 justify-center">
                            <XIcon className="size-5 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">Удалить выбранное</span>
                    </button>

                </div>

            </div>

            <section className="rounded-xl bg-primary-gray/60 p-4 my-4 lg:flex lg:items-start lg:gap-4">
                <h2 className="mb-4 font-display text-white lg:hidden uppercase font-black text-center">Доступны для заказа</h2>

                <div className="grid gap-3">
                    {cartProducts.map((product, idx) => (
                        <CartItem item={product} key={`cart-item-${idx + 1}`} quantity={cart.find(cartItem => cartItem.id === product.id)?.quantity ?? 0} addItem={add} deductItem={deduct} removeItem={remove} isSelected={selectedIds.includes(product.id)} toggleItem={toggleItem} />
                    ))}
                </div>

                <div className="fixed left-1/2 -translate-x-1/2 lg:items-start bg-primary-gray flex lg:flex-col items-center z-20 bottom-20 w-full max-w-120 rounded-md p-2 lg:translate-x-0 lg:static lg:w-108 lg:gap-2 lg:shrink-0">
                    <div className="flex-1 text-pink-500 hidden lg:order-2 lg:flex lg:items-center lg:justify-between lg:w-full">
                        <div className="font-black uppercase font-display text-sm lg:flex-1 lg:w-1/2">Товары ({selectedIds.length})</div>
                        <div className="uppercase font-square shrink-0 w-max text-sm font-bold lg:flex-1 lg:text-end lg:w-1/2 ">{itemsMessage(selectedIds.length)}</div>
                    </div>

                    <div className="flex-1 lg:order-2 lg:flex lg:items-center lg:justify-between lg:w-full">
                        <div className="font-black text-white uppercase font-display text-sm lg:flex-1 lg:w-1/2">Ваша корзина</div>
                        <div className="uppercase font-square shrink-0 w-max text-sm font-bold lg:flex-1 lg:text-end lg:w-1/2 text-green-500">{selectedPrice} P</div>
                    </div>
                    <Link onClick={handleCheckoutClick} to="/checkout" className="flex-1 rounded-sm lg:w-full bg-white font-black cursor-pointer text-sm px-2 py-1 uppercase font-display ">
                        Перейти к оформлению
                    </Link>
                </div>
            </section>

            <section className="my-4">
                <div className="bg-primary-gray rounded-full text-white text-center uppercase text-xl py-2 font-display font-black mb-4">
                    Недавно смотрели
                </div>

                <ItemList products={suggested} />
            </section>
        </div>
    )
}
type CartItemProps = {
    item: Product;
    quantity: number;
    addItem: (id: number) => void;
    deductItem: (id: number) => void;
    removeItem: (id: number) => void;
    isSelected: boolean;
    toggleItem: (id: number) => void;
}

function CartItem({ item, isSelected, toggleItem, quantity, addItem, deductItem, removeItem }: CartItemProps) {
    const [isFavorite, setIsFavorite] = useLocalStorage<number[]>('favorites', []);

    function toggleFavorite() {
        if (isFavorite.includes(item.id)) {
            setIsFavorite(p => p.filter(id => id !== item.id));
        } else {
            setIsFavorite(p => [...p, item.id]);
        }
    }

    return (
        <div className="rounded-xl bg-primary-gray px-2 py-1 flex items-center justify-between gap-2 relative">
            <div className="basis-1/5 aspect-square bg-white rounded-md flex items-center justify-center">
                <img src={item.images[0]} alt="" className="object-contain object center size-4/5" />
            </div>

            <button onClick={() => toggleItem(item.id)} className={clsx("cursor-pointer absolute -left-1 -top-1 size-6 rounded-sm flex items-center justify-center", isSelected ? "bg-slate-800" : "bg-white")}>
                <CheckIcon className="size-5 text-gray-400" />
            </button>

            <div className="basis-3/5">
                <p className="mb-2 text-white uppercase font-display font-black sm:text-base text-xs">{item.name}</p>

                <div className="flex items-center gap-1 sm:gap-2 w-full ">
                    <button onClick={toggleFavorite} className="aspect-square bg-white p-1 shrink-0 rounded-sm cursor-pointer flex">
                        <HeartIcon className={clsx("size-3 sm:size-5", isFavorite.includes(item.id) ? "text-pink-500" : "text-black")} />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="aspect-square bg-white shrink-0 p-1 rounded-sm cursor-pointer flex">
                        <Trash className="size-3 sm:size-5 text-black" />
                    </button>
                    <button className="h-max px-1 py-1 bg-white rounded-sm shrink-0  cursor-pointer flex items-center gap-1">
                        <Zap className="size-3 sm:size-5 text-black" />
                        <span className="text-[0.5rem] font-bold sm:text-sm text-black">Купить</span>
                    </button>
                </div>

            </div>
            <div>
                <div className="mb-2 uppercase font-square shrink-0 w-max sm:text-sm text-xs font-bold text-green-500">
                    {item.price} P
                </div>

                <div className="flex items-center gap-1 justify-center">
                    <button onClick={() => deductItem(item.id)} className="aspect-square bg-white rounded-sm p-1 cursor-pointer flex">
                        <Minus className="size-3 sm:size-5 text-black" />
                    </button>

                    <div className="text-white font-black border rounded-sm px-3 border-orange-500">{quantity}</div>
                    <button onClick={() => addItem(item.id)} className="aspect-square bg-white rounded-sm cursor-pointer p-1 flex">
                        <Plus className="size-3 sm:size-5 text-black" />
                    </button>
                </div>
            </div>
        </div>
    )
}
