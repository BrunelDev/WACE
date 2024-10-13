"use client";
import { useState } from "react";

export function CircularChart() {
  return (
    <div className="rounded-full bg-red-600 h-[400px] w-[400px] flex justify-center items-center">
      <div className="w-32 h-32 rounded-full z-50 [clip-path:polygon(50%_0%, 100%_50%, 50%_100%)] bg-blue-500"></div>
    </div>
  );
}
