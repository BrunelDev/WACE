"use client";
import { useState } from "react";
import { TextArea } from "@/components/textArea";
import { InputComponent } from "@/components/input";
import { Combobox } from "@/components/combobox";
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
    <div className="flex justify-between bg-white rounded shadow-sm h-fit p-6 w-[60%]">
      <div className="w-[300px] space-y-4">
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
        <div className="flex">
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Nom du produit"}
            type={"number"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
          <InputComponent
            icon={null}
            required={true}
            placeholder={"Nom du produit"}
            type={"number"}
            className={"bg-[#EFF1F9]"}
            value={productName}
            handleChange={setProductName}
          />
        </div>

        <Combobox
          width={"w-full text-black"}
          title={"Catégorie"}
          items={[{ label: "label", value: "value" }]}
        />
      </div>
      <div>
        <TextArea />
      </div>
    </div>
  );
};

const ImageSection = () => {
  return <div></div>;
};
