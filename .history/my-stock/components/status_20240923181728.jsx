import React from "react";

export function Status({ status, className = null }) {
  return (
    <div
      className={`w-fit py-1 px-3 rounded-lg text-[#519C66] text-sm bg-[#d2ece2] ${
        className && className
      }`}
    >
      {status}
    </div>
  );
}
