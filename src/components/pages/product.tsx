import { hardDrives, products, ram } from "@/lib/data/items";
import clsx from "clsx";
import { useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "../molecules/item-list";
import { Box, MapPin, ShoppingBag, Truck } from "lucide-react";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { SelectBtn } from "../atoms/select-btn";

function DeliveryMethods() {
    return (<div className="bg-primary-gray hidden lg:block rounded-3xl mb-2 p-4 space-y-4 font-black">
        <div className="bg-white text-center text-sm text-black py-2 px-3 uppercase rounded-md font-display">
            Способы получения
        </div>

        <div className="flex items-start gap-3 text-white font-display uppercase">
            <MapPin className="size-6 text-white" />

            <div>
                <p className="text-xs">самовывоз из магазина</p>
                <p className="text-[0.5rem]">м. достоевская, селезневская 30к б-в</p>
            </div>
        </div>
        <div className="flex items-start gap-3 text-white font-display uppercase">
            <Truck className="size-6 text-white" />

            <div>
                <p className="text-xs">доставка курьером</p>
                <p className="text-[0.5rem]">по москве и мо</p>
            </div>
        </div>

        <div className="flex items-start gap-3 text-white font-display uppercase">
            <Box className="size-6 text-white" />

            <div>
                <p className="text-xs">доставка по россии</p>
                <p className="text-[0.5rem]">службой доставки CDEK</p>
            </div>
        </div>

    </div>
    )
}

export default function Product() {
    const { id } = useParams();
    const parsed = Number(id);
    const product = products.find(p => p.id === parsed);
    const [selectedDrive, setSelectedDrive] = useState(hardDrives[1]);
    const [selectedRam, setSelectedRam] = useState(ram[1]);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.images[0]);
    const [isFavorite, setIsFavorite] = useLocalStorage<number[]>('favorites', []);

    function toggleFavorite() {
        if (isFavorite.includes(parsed)) {
            setIsFavorite(p => p.filter(id => id !== parsed));
        } else {
            setIsFavorite(p => [...p, parsed]);
        }
    }

    if (product == null) return null;

    const suggested = products.filter((_, i) => i % 3 === 0);

    return (
        <div className="mt-2">
            <div className="md:flex items-start justify-betwen gap-6 xl:gap-10">
                <div className="bg-blue-400 -mx-2 -mt-4 p-6 rounded-b-2xl md:rounded-3xl md:bg-primary-gray md:mx-0 md:mt-0">
                    <h1 className="font-bold font-headings text-xl md:hidden">{product.name}</h1>

                    <div className='scrollbar-hidden overflow-x-auto px-3 -mx-3 md:hidden'>
                        <div className="my-6 sm:my-8 flex items-center gap-3 w-max mx-auto md:gap-5">
                            {product.images.map((image, idx) => (
                                <div key={`product-image-${idx + 1}`} className="rounded-xl w-75 overflow-clip bg-white flex items-center justify-center">
                                    <img src={image} alt="" className="object-contain object-center size-5/7" />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="flex items-start gap-5 xl:gap-10">
                        <div className="hidden md:flex items-start gap-6 md:basis-2/3">
                            <div className="flex basis-1/8 flex-col gap-4 overflow-y-auto scrollbar-hidden h-100">
                                {product.images.map((image, imageIdx) => (
                                    <button onClick={() => setSelectedImage(image)} key={`desktop-product-img-${imageIdx}`} className="aspect-square bg-white flex items-center justify-center rounded-xl overflow-clip cursor-pointer">
                                        <img src={image} alt="" />
                                    </button>
                                ))}
                            </div>
                            <div className="bg-white aspect-sqaure h-100 flex flex-1 max-w-120 items-center justify-center rounded-xl overflow-clip">
                                {selectedImage !== null && <img src={selectedImage} alt="" className="size-full object-contain object-center aspect-square" />}
                            </div>
                        </div>
                        <div className="flex md:max-w-110 flex-wrap gap-x-6 md:flex-col gap-y-4 lg:gap-y-5 items-center md:items-start font-display uppercase text-sm xl:text-base bg-primary-gray text-white rounded-2xl py-3 px-6 md:px-0">
                            <h1 className="font-bold font-headings text-xl xl:text-2xl text-balance hidden md:inline max-w-100">{product.name}</h1>
                            <div>
                                <p className="font-bold mb-2">Объем диска:</p>

                                <div className="flex items-center gap-3 flex-wrap">
                                    {hardDrives.map((drive, driveIdx) => (
                                        <SelectBtn key={`hard-drive-value-${driveIdx}`} isActive={drive === selectedDrive} label={drive} onClick={() => setSelectedDrive(drive)} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-bold mb-2">объем опертивной памяти:</p>

                                <div className="flex items-center gap-3 flex-wrap">
                                    {ram.map((ramUnit, ramIdx) => (
                                        <SelectBtn key={`ramUnit-value-${ramIdx}`} isActive={ramUnit === selectedRam} label={ramUnit} onClick={() => setSelectedRam(ramUnit)} />
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="fixed z-20 bottom-20 left-1/2 w-full max-w-120 -translate-x-1/2 lg:translate-x-0 lg:static lg:w-72 lg:shrink-0">
                    <div className="bg-primary-gray rounded-3xl lg:mb-4 p-4 lg:space-y-4 font-black flex lg:block justify-between gap-2 items-center">
                        <div className="text-lg shrink-0 lg:text-3xl font-square text-white text-center">{product.price} Р</div>

                        <div className="flex items-center gap-2 text-sm order-2">
                            <button className="bg-white aspect-square lg:aspect-auto text-black cursor-pointer py-2 px-2 lg:px-3 uppercase rounded-3xl font-display">
                                <ShoppingBag className="size-5 text-black lg:hidden" />
                                <span className="hidden lg:inline">Добавить в корзину</span>
                            </button>
                            <button onClick={toggleFavorite} className="cursor-pointer bg-white text-black p-2 uppercase rounded-3xl font-display aspect-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={clsx("size-5", isFavorite.includes(parsed) && 'text-pink-500')}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>

                            </button>
                        </div>

                        <button className="cursor-pointer py-2 bg-green-600 text-white block lg:mx-auto rounded-md lg:rounded-3xl px-3 text-sm uppercase lg:w-full font-display">
                            Купить по клику
                        </button>
                    </div>

                    <DeliveryMethods />
                </div>
            </div>

            <section className="font-display my-4 md:flex items-start gap-4 px-2">
                <div className="flex-1">
                    <h2 className="text-xl font-black mb-2 uppercase">Описание</h2>
                    <p className="font-medium">{product.description}</p>

                </div>
                <div className="flex-1">
                    <h2 className="mt-4 text-xl font-black mb-2 uppercase">Характеристики</h2>
                    <ul className="space-y-1 uppercase font-black divide-y-2 divide-gray-400 w-max">
                        <li className="pb-1">Процессор: <span className="text-sm ml-2">{product.processor}</span></li>
                        <li>видеокарта: <span className="text-sm ml-2">{product.motherboard}</span></li>
                        <li>экран: <span className="text-sm ml-2">{product.screen}</span></li>
                        <li>вес: <span className="text-sm ml-2">{product.weight}</span></li>
                        <li>гарантия: <span className="text-sm ml-2">{product.warranty}</span></li>
                    </ul>

                </div>
            </section>
            <section className="my-4">
                <div className="bg-primary-gray rounded-full text-white text-center uppercase text-xl py-2 font-display font-black mb-4">
                    Подобрали для вас
                </div>

                <ItemList products={suggested} />
            </section>
        </div>
    )
}

