import React from "react";
import { Input } from "@/components/ui/input";

export function InputComponent({ placeholder, className }) {
  return (
    <div className="relative">
      <Search />
      <Input placeholder={placeholder} className={className} />
    </div>
  );
}
