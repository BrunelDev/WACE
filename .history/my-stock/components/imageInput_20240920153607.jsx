import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ImageInput() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <Input id="picture" type="file" />
      <Image
        src="/Image.png"
        alt="Image of Image icon"
        width={30}
        height={30}
        className="rounded-full border-2 border-gray-300 object-cover"
      />
    </div>
  );
}
