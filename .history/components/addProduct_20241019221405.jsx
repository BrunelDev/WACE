"use client";
import { useState } from "react";
import { TextArea } from "@/components/textArea";
import { InputComponent } from "@/components/input";
import { Combobox } from "@/components/combobox";
import { SwitchComponent } from "@/components/switch";
import { ImageInput } from "@/components/imageInput";
export function AddProduct() {
  return (
    <div className=" w-full flex justify-between">
      <TextSection />
      <ImageSection />
    </div>
  );
}
const TextSection = () => {
  const [productName, setProductName] = useState("");
  return (
    <div className="flex justify-between bg-white rounded shadow-sm h-[90vh] p-6 w-[60%]">
      <div className="w-[350px] space-y-8">
        <InputComponent
          icon={null}
          required={true}
          placeholder={"Nom du produit"}
          type={"text"}
          className={"bg-[#EFF1F9]"}
          value={productName}
          handleChange={setProductName}
        />
        <InputComponent
          icon={null}
          required={true}
          placeholder={"Nom du produit"}
          type={"text"}
          className={"bg-[#EFF1F9]"}
          value={productName}
          handleChange={setProductName}
        />
        <div className="flex space-x-2">
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Prix d'achat"}
            type={"number"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Prix de vente"}
            type={"number"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
        </div>
        <InputComponent
          icon={null}
          required={true}
          placeholder={"Quantité en Stock"}
          type={"number"}
          className={"bg-[#EFF1F9]"}
          value={productName}
          handleChange={setProductName}
        />

        <Combobox
          width={"w-full text-black"}
          title={"Catégorie"}
          items={[{ label: "label", value: "value" }]}
        />
        <div className=" w-full flex justify-between">
          Réduction
          <SwitchComponent label={"Activer la réduction"} />
        </div>
        <div className=" w-full flex justify-between">
          Date d&apos;expiration{" "}
          <SwitchComponent label={"Ajouter date d'expiration"} />
        </div>
      </div>
      <div className="w-[350px] space-y-4">
        <TextArea />
        <div className="flex space-x-3">
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Quantité en Stock"}
            type={"date"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Quantité en Stock"}
            type={"date"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
        </div>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div>
      <ImageInput />
    </div>
  );
};
