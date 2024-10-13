"use client";
import { useState } from "react";

export function CircularChart() {
  return (
    <div className="rounded-full bg-red-600 h-[400px] w-[400px] flex justify-center items-center">
      <div className="w-32 h-32 rounded-full z-50 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] clip border-blue-500 transform rotate-45"></div>
    </div>
  );
}
