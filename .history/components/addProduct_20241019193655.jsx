"use client";
import React from "react";
import { TextArea } from "@/components/textArea";
import { InputComponent } from "@/components/input";

export function AddProduct() {
  return (
    <div className=" w-full flex justify-between">
      <TextSection />
      <ImageSection />
    </div>
  );
}
const TextSection = () => {
  return (
    <div className="flex justify-between bg-white rounded shadow-sm h-[70vh] w-[60%]">
      <div>
        <InputComponent
          required={true}
          placeholder={"Nom du produit"}
          type={"text"}
          className={"bg-[#EFF1F9]"}
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
