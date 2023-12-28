import { FC } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


interface ContactDetailProps {

}

const ContactDetail: FC<ContactDetailProps> = () => {
    return (
        <div className="gap-4 mt-0 lg:mt-12 lg:ml-24">
            <div className="lex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row my-3">
                <Label htmlFor="contact-address" className="text-base font-normal">Contact Address:</Label>
                <Textarea placeholder="Type your address here." id="contact-address" className="mx-4 w-5/6 sm:w-full  max-w-[280px] sm:max-w-[470px] md:max-w-[560px] lg:w-[370px] mt-1"/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="contact-number" className="font-normal mb-1">Contact Number:</Label>
                <Input type="tel" id="contact-number" placeholder="+639" className="ml-4 sm:w-full max-w-[280px] sm:max-w-[280px] md:max-w-[560px] lg:max-w-[370px]" />
            </div>
        </div>
    )
}

export default ContactDetail
