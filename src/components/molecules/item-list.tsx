import type { Product } from "@/lib/data/items"
import Item from "../atoms/item";
import clsx from "clsx";

type ItemListProps = {
    products: Product[]; 
    className?: string;
}

export default function ItemList({products, className}: ItemListProps) {
    return <section className={clsx("grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-3 md:gap-5", className)}>
        {products.map((pr, idx) => (
            <Item key={`item-${idx + 1}`} item={pr} />
        ))}
    </section>

}
