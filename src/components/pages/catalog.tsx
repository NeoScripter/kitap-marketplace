import { products } from "@/lib/data/items";
import ItemList from "../molecules/item-list";
import { useState } from "react";
import Search from "../atoms/search";
import ItemCategory from "../atoms/item-category";
import { SlidersHorizontal } from "lucide-react";
import clsx from "clsx";

const categories = [
    "все фильтры",
    "состояние",
    "бренд",
    "Процессор",
    "экран",
    "Цена",
    "Видеокарта"
];

export default function Catalog() {
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(0);

    const sortedItems = products.filter(p =>  p.name.startsWith(searchInput));
    return (
        <div>

            <Search className='sm:mb-5' value={searchInput} setValue={setSearchInput} />

            <div className='scrollbar-hidden overflow-x-auto px-3 -mx-3'>
                <div className="mt-3 mb-7 flex items-center gap-3 w-max mx-auto md:gap-5">
                    <ItemCategory className=" flex items-center gap-2" key={`item-category-all`} isActive={0 === selectedCategory} onClick={() => setSelectedCategory(0)} >
                        <SlidersHorizontal className={clsx("size-4", selectedCategory === 0 ? "text-white" : "text-black")}/>
                        Все фильтры
                    </ItemCategory>
                    {categories.filter((_, i) => i !== 0).map((cat, idx) => (
                        <ItemCategory key={`item-category-${idx + 1}`} isActive={idx + 1 === selectedCategory} onClick={() => setSelectedCategory(idx + 1)} >{cat}</ItemCategory>
                    ))}
                </div>

            </div>

            <ItemList products={sortedItems} />
        </div>)
}
