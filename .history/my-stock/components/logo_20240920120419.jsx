import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div>
      <Image src="/logo.png" alt="Logo" width={120} height={40} />
      <h1 className="text-2xl font-bold">My Stock</h1>
    </div>
  );
}
