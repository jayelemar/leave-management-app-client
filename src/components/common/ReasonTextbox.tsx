import { FC } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ReasonTextboxProps {

}

const ReasonTextbox: FC<ReasonTextboxProps> = () => {
  return (
    <div className="lex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row my-3">
      <Label htmlFor="message" className="text-base font-normal">Reason</Label>
      <Textarea placeholder="Type your message here." id="message" className="mx-4 w-5/6 max-w-[280px] sm:max-w-[550px] mt-1"/>
    </div>
  )
}

export default ReasonTextbox
