import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div>
      <Image src="/logo.png" alt="Logo" width={120} height={40} />
      <h1 className="text-lg font-semibold">WACEE</h1>
    </div>
  );
}
