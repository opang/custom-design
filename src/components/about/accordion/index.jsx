import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react"

const Accordionn = () => {
    return(
        <Accordion className="shadow-md" collapseAll>
            <AccordionPanel>
                <AccordionTitle>
                    <p className="text-slate-700">We Can Custom Design Your Ideas</p>
                </AccordionTitle>
                <AccordionContent>
                    <p className="text-slate-700">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>
                    <p className="text-slate-700">Your Payment Is Safe And Secured</p>
                </AccordionTitle>
                <AccordionContent>
                    <p className="text-slate-700">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>
                    <p className="text-slate-700">We Offer Discounts And Coupons</p>
                </AccordionTitle>
                <AccordionContent>
                    <p className=" text-slate-700">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>
                    <p className="text-slate-700">A “just-right” selection</p>
                </AccordionTitle>
                <AccordionContent>
                    <p className=" text-slate-700">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    )
}

export default Accordionn