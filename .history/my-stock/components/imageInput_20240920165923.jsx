import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CloudUpload } from "lucide-react";

export function ImageInput() {
  const [image, setImage] = useState(null);
  return (
    <div className="relative">
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
        className="w-full h-[250px] cursor-pointer"
      />
      <div className="flex space-x-8"></div>
    </div>
  );
}
