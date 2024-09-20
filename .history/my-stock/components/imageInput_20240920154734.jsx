import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ImageInput() {
  return (
    <div className="relative">
      <Input
        id="picture"
        type="file"
        className="pointer-events-none w-full h-[250px]"
      />
      <div className="w-full h-[250px] flex flex-col justify-center items-center p-10 bg-gray-200 rounded-lg absolute top-0">
        <Image
          src="/Image.png"
          alt="Image of Image icon"
          width={70}
          height={70}
          className="object-cover"
        />
        <h1>Ajouter une Image</h1>
        <h1>Ajoutez une image de couverture pour votre produit</h1>
      </div>
    </div>
  );
}
