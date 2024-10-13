import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ImageInput() {
  return (
    <div className="">
      <Input
        id="picture"
        type="file"
        className="w-[70px] h-[70px] pointer-events-none"
      />
      <div className="w-full flex flex-col justify-center items-center p-10">
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
