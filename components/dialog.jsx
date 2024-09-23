import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function DialogComponent({ trigger, dialogContent }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-fit h-fit">
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
