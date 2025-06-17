import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { footerLinks } from "@/lib/data/footer-links";

export default function Footer() {
    return <footer className="bg-black rounded-2xl text-white px-4 mt-6">
        <Accordion type="single" collapsible className="font-square md:hidden">
            {footerLinks.map((link, idx) => (
                <AccordionItem key={`footer-link-${idx + 1}`} value={`footer-link-${idx + 1}`}>
                    <AccordionTrigger className="fond-bold text-xl [&>svg]:size-7 [&>svg]:text-white">{link.heading}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="font-normal font-display space-y-2">
                            {link.links.map((link, linkIdx) => (
                                <li key={`footer-link-item-${linkIdx}`}>{link}</li>
                            ))} </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>

        <div className="hidden md:flex flex-wrap gap-4 items-start p-4 justify-between">
            {footerLinks.map((link, idx) => (
                <ul key={`footer-link-${idx + 1}`} className="font-normal flex-1 font-display space-y-2">
                    {link.links.map((link, linkIdx) => (
                        <li key={`footer-link-item-${linkIdx}`} className="">{link}</li>
                    ))} </ul>
            ))}
        </div>
    </footer>;
}
