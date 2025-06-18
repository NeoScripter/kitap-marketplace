import type { Product } from "@/lib/data/items"
import Item from "../atoms/item";
import clsx from "clsx";

type ItemListProps = {
    products: Product[]; 
    className?: string;
}

export default function ItemList({products, className}: ItemListProps) {

    if (products.length === 0) return <p>По вашему запросу ничего не найдено</p>
    return <section className={clsx("grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 md:gap-6 lg:grid-cols-5", className)}>
        {products.map((pr, idx) => (
            <Item key={`item-${idx + 1}`} item={pr} />
        ))}
    </section>

}
