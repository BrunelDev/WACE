import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ImageInput() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <Input
        id="picture"
        type="file"
        className="w-[70px] h-[70px] pointer-events-none"
      />
      <Image
        src="/Image.png"
        alt="Image of Image icon"
        width={70}
        height={70}
        className="object-cover"
      />
    </div>
  );
}
