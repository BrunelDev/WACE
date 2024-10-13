"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/comboBox";
import { Search } from "lucide-react";
import { InputComponent } from "@/components/input";
import { addClients } from "@/lib/functions";
export function AddOrderCard() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
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
  return (
    <div className="w-[420px] rounded-lg px-2 pb-5 flex flex-col bg-white">
      <span className="font-semibold text-lg my-[20px]">
        Ajouter une Nouvelle Commande
      </span>
      <span className="my-[20px] text-sm text-gray-400">
        Détails de la commande
      </span>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-4">
          <FormInput
            placeholder={"Nom du Client"}
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <FormInput
            type={"email"}
            placeholder={"Email du Client"}
            value={customerEmail}
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
          />
          <div className="flex justify-between space-x-3">
            <Combobox items={items} title={"🇧🇯 +229"} />
            <FormInput
              placeholder={"90570100"}
              value={customerPhone}
              onChange={(e) => {
                setCustomerPhone(e.target.value);
              }}
            />
          </div>

          <div
            className="w-fit h-fit"
            onClick={() => {
              setShowAddress(!showAddress);
            }}
          >
            <SwitchComponent label={"Ajouter une addresse"} />
          </div>
          <div
            className={`flex-col space-y-4 ${showAddress ? "flex" : "hidden"}`}
          >
            <FormInput
              placeholder={"Appartement No., Street Address"}
              value={customerAddress}
              onChange={(e) => {
                setCustomerAddress(e.target.value);
              }}
            />
            <FormInput
              placeholder={"Ville"}
              value={customerPhone}
              onChange={(e) => {
                setCustomerPhone(e.target.value);
              }}
            />
            <div className="flex justify-between mt-4">
              <Combobox items={items} title={"Pays"} />
              <Combobox items={items} title={"Etat"} />
            </div>
            <div className="flex justify-between text-nowrap">
              <span>Adresse de la Facture</span>
              <span>Pareille que celle du Client</span>
              <SwitchComponent />
            </div>
          </div>
          <div className="flex space-x-3 justify-center">
            <Button title={"Annuler"} bgColor={"border border-[#5570F1]"} />
            <Button
              title={"Confirmer"}
              bgColor={"bg-[#5570F1]"}
              textColor={"text-white"}
              handleClick={() => {
                addClients(
                  customerEmail,
                  customerName,
                  customerAddress,
                  customerPhone
                );
              }}
            />
          </div>
        </div>

        <div>
          <span>Produits</span>
          <InputComponent
            placeholder={"Rechercher"}
            icon={<Search size={22} />}
          />
        </div>
      </div>
    </div>
  );
}

const Button = ({ bgColor, textColor, title, handleClick }) => {
  return (
    <button
      className={`${bgColor} ${textColor} py-2 px-8 rounded-md`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export function FormInput({ value, onChange, placeholder, type }) {
  return (
    <Input
      className="bg-[#EFF1F9]"
      type={type && "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

function SwitchComponent({ label }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">{label ? label : ""}</Label>
    </div>
  );
}
