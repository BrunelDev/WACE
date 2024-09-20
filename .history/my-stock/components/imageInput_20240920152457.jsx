import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImageInput() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <Input id="picture" type="image" />
    </div>
  );
}
