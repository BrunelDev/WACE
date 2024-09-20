import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarComponent({ src, fallback }) {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} alt="Image de profile" />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
}
