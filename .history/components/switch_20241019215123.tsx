import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchComponent({
  label,
  handleSwitch,
}: {
  label: string;
  handleSwitch: Function;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch" onClick={handleSwitch ? handleSwitch : () => {}} />
      <Label htmlFor="switch">Airplane Mode</Label>
    </div>
  );
}
