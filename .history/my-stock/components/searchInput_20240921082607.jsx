import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputComponent({ placeholder }) {
  return (
    <div className="relative">
      <Search />
      <Input placeholder={placeholder} className="pl-10" />
    </div>
  );
}
