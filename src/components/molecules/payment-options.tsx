import Payment1 from '@/assets/images/pay-1.png';
import Payment2 from '@/assets/images/pay-2.png';
import Payment3 from '@/assets/images/pay-3.png';
import clsx from 'clsx';
import { useState } from 'react';

type PaymentOptionsProps = {
    price: number;
}
export function PaymentOptions({ price }: PaymentOptionsProps) {
    const [activePayment, setActivePayment] = useState(0);

    return (
        <div className='md:flex-1 w-full md:space-y-4 shrink-0 max-w-120'>

            <div className="bg-primary-gray rounded-xl p-3 ">
                <div className="flex gap-3 items-center">
                    <button onClick={() => setActivePayment(0)} className={clsx("bg-white flex-1 overflow-clip rounded-4xl border-2", activePayment === 0 ? 'border-green-400' : 'border-black')}>
                        <img src={Payment1} alt="" className='object-contain object-center size-full' />
                    </button>
                    <button onClick={() => setActivePayment(1)} className={clsx("bg-white flex-1 overflow-clip rounded-4xl border-2", activePayment === 1 ? 'border-green-400' : 'border-black')}>
                        <img src={Payment2} alt="" className='object-contain object-center size-full' />
                    </button>
                    <button onClick={() => setActivePayment(2)} className={clsx("bg-white flex-1 overflow-clip rounded-4xl border-2", activePayment === 2 ? 'border-green-400' : 'border-black')}>
                        <img src={Payment3} alt="" className='object-contain object-center size-full' />
                    </button>
                </div>

                <div className="flex font-black uppercase text-xl sm:text-2xl mt-3 items-center text-white justify-between">
                    <div>Итого</div>
                    <div>{price} P</div>
                </div>
            </div>

            <div className="bg-primary-gray fixed bottom-20 left-1/2 -translate-x-1/2 max-w-100 px-4 w-full rounded-md md:static md:translate-x-0 md:max-w-120 py-2 flex font-black uppercase text-xl sm:text-2xl mt-3 items-center text-white justify-between">
                <div className='md:hidden'>{price} P</div>
                <button className="px-4 rounded-md md:text-xl md:mx-auto md:w-full md:text-white md:bg-primary-gray cursor-pointer uppercase text-sm py-2 bg-white text-black">
                    Оплатить онлайн
                </button>
            </div>
        </div>
    )
}
