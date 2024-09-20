import { useState } from "react";
//import { Combobox } from "@/components/comboBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/combobox";
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
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerState, setCustomerState] = useState("");
  return (
    <div>
      <div className="flex flex-col space-y-4 w-[450px]">
        <InputLabel
          label={"Prénom"}
          type={"text"}
          placeholder={"Manassé"}
          value={customerFirstName}
          onChange={setCustomerFirstName}
        />
        <InputLabel
          label={"Nom"}
          type={"text"}
          placeholder={"Brouteur"}
          value={customerLastName}
          onChange={setCustomerLastName}
        />
        <InputLabel
          label={"Email"}
          type={"email"}
          placeholder={"exemple@gmail.com"}
          value={customerEmail}
          onChange={setCustomerEmail}
        />
        {/**combobox */}
        <div className="flex justify-between">
          <Combobox items={items} title={"+229"} />
          <InputLabel
            label={""}
            type={"phone"}
            placeholder={"010001001"}
            value={customerPhone}
            onChange={setCustomerPhone}
          />
        </div>
        <InputLabel
          label={"Adresse"}
          type={"text"}
          placeholder={"No. 93 Skyfield Apartments"}
          value={customerAddress}
          onChange={setCustomerAddress}
        />
        <InputLabel
          label={"Ville"}
          type={"text"}
          placeholder={"Calavi"}
          value={customerCity}
          onChange={setCustomerCity}
        />
        {/**combobox */}
      </div>
    </div>
  );
}

const InputLabel = ({ placeholder, value, onChange, type, label }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <Label htmlFor={placeholder}>{label}</Label>}
      <Input
        className="bg-[#EFF1F9]"
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
