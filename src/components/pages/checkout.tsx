import { Input } from "@headlessui/react"
import { useState } from "react";

export default function Checkout() {
    const [addressInput, setAddressInput] = useState('');
    const [cardInput, setCardInput] = useState('');
    
    return (
        <div>
            <h1 className="font-black font-display text-xl md:text-3xl uppercase mb-2">Оформление заказа</h1>

            <div className="gap-4 flex items-start flex-wrap">
                <div className="bg-black rounded-xl p-3">
                    <div className="flex items-center justify-between gap-3 md:gap-4">
                        {[1, 2, 3].map(number => (
                            <DeliveryItem key={`delivery-item-${number}`} />
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 w-full mt-2 md:mt-3">

                        <div className="py-2 font-display flex-1">
                            <Input value={addressInput} onChange={(e) => setAddressInput(e.target.value)} className="bg-white w-full text-black !normal-case rounded-sm px-2 h-full" placeholder='Адрес' />
                        </div>
                        <div className="py-2 font-display flex-1">
                            <Input value={cardInput} onChange={(e) => setCardInput(e.target.value)} className="bg-white w-full text-black !normal-case rounded-sm px-2 h-full" placeholder='ADOVEE Виталий, 8 499 765 65 65' />
                        </div>
                    </div>

                </div>
            </div>

            <div className="gap-4 flex mt-8 items-start flex-wrap">
                <div className="bg-black rounded-xl p-3 overflow-x-auto scrollbar-hidden">
                    <div className="flex px-2 items-center justify-between gap-3 md:gap-4">
                        {[1, 2, 3, 4, 5, 6].map(number => (
                            <DayItem key={`day-item-${number}`} />
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 w-full mt-2 md:mt-3">

                    </div>

                </div>
            </div>
        </div>
    )
}
function DayItem() {
    return (
        <div className=" text-center bg-white font-black uppercase p-4 rounded-xl font-display">
            <p>Завтра</p> 
            <p className="text-gray-400">0 p</p>
        </div>
    )
}
function DeliveryItem() {
    return (
        <div className="bg-white font-black uppercase p-2 rounded-xl font-display">
            <p className="font-black text-black mb-2 uppercase text-sm sm:text-base font-display md:text-xl">Курьер</p>

            <div className="flex items-center justify-between">
                <div className="text-[0.6rem] sm:text-sm md:text-base">
                    <p>Завтра или позже</p>
                    <p className="text-green-500 ">Бесплатно</p>
                </div>
            </div>
        </div>
    )
}
