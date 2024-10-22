import { Textarea } from "@/components/ui/textarea";

export function TextArea(placeholder, value, handleChange) {
  return (
    <Textarea
      value={value ? value : ""}
      onChange={handleChange ? handleChange : undefined}
    />
  );
}
