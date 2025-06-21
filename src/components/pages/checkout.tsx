import { Input } from "@headlessui/react"
import { useState } from "react";
import DeliveryItem from "../atoms/delivery-item";
import { deliveryItems } from "@/lib/data/delivery-items";
import { ChevronRight } from "lucide-react";
import { dayItems } from "@/lib/data/day-items";
import DayItem from "../atoms/day-item";
import { PaymentOptions } from "../molecules/payment-options";

export default function Checkout() {
    const [addressInput, setAddressInput] = useState('');
    const [cardInput, setCardInput] = useState('');
    const [activeDeliveryItem, setActiveDeliveryItem] = useState(0);
    const [activeDayItem, setActiveDayItem] = useState(0);

    const finalPrice = localStorage.getItem('checkout-price');

    return (
        <div>
            <h1 className="font-black font-display text-xl md:text-3xl uppercase mb-2">Оформление заказа</h1>

            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="space-y-4 lg:flex-1 max-w-165 xl:max-w-220">
                    <div className="bg-black rounded-xl p-3 overflow-x-auto scrollbar-hidden">
                        <div className="flex items-center w-max justify-between gap-3 md:gap-4">
                            {deliveryItems.map((item, idx) => (
                                <DeliveryItem key={`delivery-item-${idx + 1}`} title={item.title} headline={item.headline} price={item.price} isActive={activeDeliveryItem === idx} onClick={() => setActiveDeliveryItem(idx)} />
                            ))}
                        </div>

                        <div className="flex flex-wrap sm:items-center flex-col sm:flex-row gap-x-4 gap-y-1 w-full mt-2 md:mt-3">

                            <div className="py-2 font-display relative flex-1">
                                <Input value={addressInput} onChange={(e) => setAddressInput(e.target.value)} className="bg-white w-full text-black !normal-case rounded-full py-2 px-4 h-full" placeholder='Адрес' />
                                <ChevronRight className="size-8 text-black absolute right-2 top-1/2 -translate-y-1/2" />
                            </div>
                            <div className="py-2 font-display relative flex-1">
                                <Input value={cardInput} onChange={(e) => setCardInput(e.target.value)} className="bg-white w-full text-black !normal-case rounded-full py-2 px-4 h-full" placeholder='ADOVEE Виталий, 8 499 765 65 65' />
                                <ChevronRight className="size-8 text-black absolute right-2 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-black rounded-xl p-3 overflow-x-auto scrollbar-hidden">
                        <div className="flex items-center w-max justify-between gap-3 md:gap-4">
                            {dayItems.map((item, idx) => (
                                <DayItem key={`day-item-${idx + 1}`} day={item.day} time={item.time} price={item.price} isActive={activeDayItem === idx} onClick={() => setActiveDayItem(idx)} />
                            ))}
                        </div>
                    </div>
                </div>

                <PaymentOptions price={Number(finalPrice)} />

            </div>
            <div className="gap-4 flex mt-8 items-start flex-wrap">
            </div>
        </div>
    )
}

