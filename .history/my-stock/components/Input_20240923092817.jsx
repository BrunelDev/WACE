import React from "react";
import { Input } from "@/components/ui/input";

export function InputComponent({ placeholder, icon }) {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2 w-fit">{icon}</div>

      <Input placeholder={placeholder} className="pl-10" />
    </div>
  );
}
