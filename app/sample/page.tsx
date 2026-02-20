import { Accordion } from "radix-ui"
import { CardImage } from "./card"
import { AccordionBasic } from "./accordion"

export default function Page() {
    return <>
        <div className="mt-10 flex flex-col items-center gap-6">
            <CardImage />
            <AccordionBasic />
        </div>

    </>
}