import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CloudUpload } from "lucide-react";

export function ImageInput({ description = true }) {
  const [image, setImage] = useState(null);
  return (
    <div className="relative w-full h-fit">
      <Input
        accept=".jpg, .png, .jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result);
              console.log(reader.result);
            };
            reader.readAsDataURL(file);
          } else {
            setImage(null);
          }
        }}
        id="picture"
        type="file"
        className="w-full h-[120px] cursor-pointer"
      />
      <div className="flex flex-row space-x-8 w-full">
        <div
          className={`w-full ${
            description ? "h-[250px]" : "h-fit"
          } flex flex-col justify-center items-center p-6 bg-gray-100 rounded-lg absolute top-0 pointer-events-none space-y-5`}
        >
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
            <h1 className="text-nowrap">Ajouter une Image</h1>
          </div>
          {description ? (
            <h1 className="text-gray-400">
              Ajoutez une image de couverture pour votre produit
            </h1>
          ) : null}
        </div>

        <div>
          {image ? (
            <Image
              src={image}
              alt="Image de profile"
              width={300}
              height={300}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
