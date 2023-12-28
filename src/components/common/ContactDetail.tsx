import { FC } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


interface ContactDetailProps {

}

const ContactDetail: FC<ContactDetailProps> = () => {
    return (
        <div className="gap-4 mt-10">
            <div className="lex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row my-3">
                <Label htmlFor="contact-address" className="text-base font-normal">Contact Address:</Label>
                <Textarea placeholder="Type your address here." id="contact-address" className="mx-4 w-5/6 max-w-[280px] sm:max-w-[550px] mt-1"/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="contact-number">Contact Number:</Label>
                <Input type="number" id="contact-number" placeholder="+639" className="ml-4 max-w-[280px]" />
            </div>
        </div>
    )
}

export default ContactDetail
