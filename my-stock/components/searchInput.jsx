import React from "react";
import { Input } from "@/components/ui/input";

export function SearchInput({ placeholder, className }) {
  return (
    <div className="relative">
      <Input placeholder={placeholder} className={className} />
    </div>
  );
}