"use client";
import React from "react";

export function AddButton({ className, onClick, title }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 ${className} px-3 py-2 w-fit rounded-xl text-white`}
      onClick={onClick}
    >
      <h6>{title}</h6>
    </button>
  );
}
