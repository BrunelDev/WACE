"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/comboBox";
import { Search } from "lucide-react";
import { InputComponent } from "@/components/input";
import { addClients } from "@/lib/functions";
import Image from "next/image";
export function AddOrderCard() {
  const [customer, setCustomer] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [OrderType, setOrderType] = useState("");
  const [status, setStatus] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [productId, setProductId] = useState(0);
  const paymentTypes = [
    { value: "Virement", label: "Virement" },
    { value: "Cheque", label: "Cheque" },
    { value: "Dépot", label: "Dépot" },
  ];
  const orderTypes = [
    { value: "Livraison", label: "Livraison" },
    { value: "Sur place", label: "Sur place" },
  ];
  const statuses = [
    { value: "En cours", label: "En cours" },
    { value: "En attente", label: "En attente" },
    { value: "Livré", label: "Livré" },
    { value: "Annulé", label: "Annulé" },
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

          <Combobox items={paymentTypes} title={"Type de Paiement"} />
          <Combobox items={orderTypes} title={"Type de commande"} />
          <Combobox items={statuses} title={"Choisir un client"} />

          <Combobox items={items} title={"Choisir un client"} />

          <FormInput
            placeholder={"Précisions sur la commande..."}
            value={orderNote}
            onChange={(e) => {
              setOrderNote(e.target.value);
            }}
          />
        </div>

        <div className="w-[45%]">
          <span>Produits</span>
          <InputComponent
            placeholder={"Rechercher"}
            icon={<Search size={22} />}
          />
          <div className="flex justify-center items-center">
            <Image
              src={"/orderImage.png"}
              width={100}
              height={100}
              alt="bag image"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-3 justify-center mt-3">
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
