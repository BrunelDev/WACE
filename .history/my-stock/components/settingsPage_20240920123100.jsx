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
        <InputLabel
        label={"Prénom"}
        type={"text"}
          placeholder={"Manassé"}
          value={customerName}
          onChange={}
        />
        <InputLabel
        label={"Nom"}

        type={"text"}

          placeholder={"Brouteur"}
          value={customerEmail}
          onChange={}
        /><InputLabel
        label={"Nom"}

        type={"text"}

          placeholder={"Brouteur"}
          value={customerEmail}
          onChange={}
        />
        {/**combobox */}
        <InputLabel
        label={"Nom"}

        type={"text"}

          placeholder={"Brouteur"}
          value={customerEmail}
          onChange={}
        /><InputLabel
        label={"Nom"}

        type={"text"}

          placeholder={"Brouteur"}
          value={customerEmail}
          onChange={}
        />
        {/**combobox */}

      </div>
    </div>
  );
}

const InputLabel = ({ placeholder, value, onChange, type, label }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
