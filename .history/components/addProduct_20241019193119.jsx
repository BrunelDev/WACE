"use client";
import React from "react";
import { TextArea } from "@/components/textArea";
import { InputComponent } from "@/components/input";

export function AddProduct() {
  return (
    <div className=" w-fullflex justify-between">
      <TextSection />
      <ImageSection />
    </div>
  );
}
const TextSection = () => {
  return (
    <div className="flex justify-between bg-white rounded shadow-sm h-[70vh]">
      <div>
        <InputComponent
          placeholder={"Nom du produit"}
          icon={<span className="text-gray-500 text-sm">Nom</span>}
          type={"text"}
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
