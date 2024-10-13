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
  const [customer, setCustomer] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [OrderType, setOrderType] = useState("");
  const [status, setStatus] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [productId, setProductId] = useState(0);
  const paymentType = [
    { value: "Virement", label: "Virement" },
    { value: "Virement", label: "Virement" },
    { value: "Virement", label: "Virement" },
  ];
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
    <div className="w-[580px] rounded-lg px-2 pb-5 flex flex-col bg-white">
      <span className="font-semibold text-lg my-[20px]">
        Ajouter une Nouvelle Commande
      </span>
      <span className="my-[20px] text-sm text-gray-400">
        Détails de la commande
      </span>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-4 w-[45%]">
          <Combobox items={items} title={"Choisir un client"} />

          <Combobox items={items} title={"Type de Paiement"} />
          <Combobox items={items} title={"Type de commande"} />
          <Combobox items={items} title={"Choisir un client"} />

          <Combobox items={items} title={"Choisir un client"} />

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

        <div className="w-[45%]">
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
