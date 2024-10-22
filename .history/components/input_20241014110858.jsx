import React from "react";
import { Input } from "@/components/ui/input";

export function InputComponent({
  placeholder,
  icon,
  type,
  required,
  className,
  value,
  handleChange,
}) {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 left-2 w-fit">{icon}</div>

      <Input
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder={placeholder}
        className={`pl-10 w-full ${className && className}`}
        type={type}
        required={required}
      />
    </div>
  );
}

export function SearchInputComponent({
  placeholder,
  icon,
  type,
  required,
  className,
  value,
  handleChange,
}) {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 left-2 w-fit">{icon}</div>

      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`pl-10 w-full ${className && className}`}
        type={type}
        required={required}
      />
    </div>
  );
}
