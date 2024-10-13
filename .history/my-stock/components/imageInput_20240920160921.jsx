import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CloudUpload } from "lucide-react";

export function ImageInput() {
  return (
    <div className="relative">
      <Input
        id="picture"
        type="file"
        className="w-full h-[250px] cursor-pointer"
      />
      <div className="w-full h-[250px] flex flex-col justify-center items-center p-10 bg-gray-200 rounded-lg absolute top-0 pointer-events-none space-y-5">
        <Image
          src="/Image.png"
          alt="Image of Image icon"
          width={40}
          height={40}
          className="object-cover"
        />
        <div className="flex space-x-2 text-blue-600">
          <span>
            <CloudUpload />
          </span>
          <h1>Ajouter une Image</h1>
        </div>

        <h1 className="text-gray-400">
          Ajoutez une image de couverture pour votre produit
        </h1>
      </div>
    </div>
  );
}
