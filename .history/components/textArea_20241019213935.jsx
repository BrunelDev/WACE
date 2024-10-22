import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextArea({ label, placeholder, className }) {
  return (
    <div className="grid w-full gap-1.5">
      {label ? <Label htmlFor="message">{label}</Label> : null}
      <Textarea
        placeholder={label ? label : null}
        id="message"
        className={className ? className : className}
      />
    </div>
  );
}
