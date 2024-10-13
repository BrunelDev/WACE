"use client";
import { useState } from "react";

export function CircularChart() {
  return (
    <div className="rounded-full bg-red-600 h-[400px] w-[400px] flex justify-center items-center">
      <div className="w-32 h-32 rounded-full border-t-4 border-l-10 border-blue-500 transform rotate-45"></div>
    </div>
  );
}
