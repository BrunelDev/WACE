import React from "react";
//import { Combobox } from "@/components/comboBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const items = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
export function SettingsPage() {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <FormInput
          placeholder={"Nom du Client"}
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
        />
        <FormInput
          placeholder={"Email du Client"}
          value={customerEmail}
          onChange={(e) => {
            setCustomerEmail(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

const InputLabel = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
};
