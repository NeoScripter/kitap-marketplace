import { hardDrives, products, ram } from "@/lib/data/items";
import clsx from "clsx";
import { useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "../molecules/item-list";

export default function Product() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const [selectedDrive, setSelectedDrive] = useState(hardDrives[1]);
    const [selectedRam, setSelectedRam] = useState(ram[1]);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.images[0]);

    if (product == null) return null;

    const suggested = products.filter((_, i) => i % 3 === 0);

    return (
        <div className="mt-2">
            <div className="bg-blue-400 -mx-2 -mt-4 p-6 rounded-b-2xl md:rounded-3xl md:bg-black md:mx-0 md:mt-0">
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
                        <div className="bg-white aspect-sqaure h-100 flex flex-1 max-w-120 xl:h-140 xl:max-w-160 items-center justify-center rounded-xl overflow-clip">
                            {selectedImage !== null && <img src={selectedImage} alt="" className="size-full object-contain object-center aspect-square" />}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-6 md:flex-col gap-y-4 items-center md:items-start font-display uppercase text-sm xl:text-base bg-black text-white rounded-2xl py-3 px-6 md:px-0">
                        <h1 className="font-bold font-headings text-xl xl:text-2xl text-balance hidden md:inline">{product.name}</h1>
                        <div>
                            <p className="font-bold mb-2">Объем диска:</p>

                            <div className="flex items-center gap-3 flex-wrap">
                                {hardDrives.map((drive, driveIdx) => (
                                    <SelectButton key={`hard-drive-value-${driveIdx}`} isActive={drive === selectedDrive} label={drive} onClick={() => setSelectedDrive(drive)} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="font-bold mb-2">объем опертивной памяти:</p>

                            <div className="flex items-center gap-3 flex-wrap">
                                {ram.map((ramUnit, ramIdx) => (
                                    <SelectButton key={`ramUnit-value-${ramIdx}`} isActive={ramUnit === selectedRam} label={ramUnit} onClick={() => setSelectedRam(ramUnit)} />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <section className="my-4">
                <div className="bg-black rounded-full text-white text-center uppercase text-xl py-2 font-display font-black mb-4">
                    Подобрали для вас
                </div>

                <ItemList products={suggested} />
            </section>
        </div>
    )
}
type SelectButtonProps = {
    isActive: boolean;
    label: string;
    onClick: () => void;
}

function SelectButton({ isActive, label, onClick }: SelectButtonProps) {
    return <button onClick={onClick} className={clsx("rounded-full text-xs xl:text-sm text-white border-2 cursor-pointer font-display font-black py-1 px-5 uppercase", isActive ? 'border-green-600' : 'border-white')}>{label}</button>
}
