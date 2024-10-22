import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchComponent({ label, handleSwitch }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch" />
      <Label htmlFor="switch">Airplane Mode</Label>
    </div>
  );
}
