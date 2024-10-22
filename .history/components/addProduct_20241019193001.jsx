"use client";
import React from "react";
import { TextArea } from "@/components/textArea";
import { InputComponent } from "@/components/input";

export function AddProduct() {
  return (
    <div className="flex justify-between">
      <TextSection />
      <ImageSection />
    </div>
  );
}
const TextSection = () => {
  return (
    <div className="flex justify-between">
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
