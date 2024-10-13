import React from "react";

export function Status({ status, className = null }) {
  return (
    <div
      className={`w-fit py-1 px-1 rounded-lg  text-sm bg-[#d2ece2] ${
        className ? className : "text-[#519C66] bg-[#d2ece2]"
      }`}
    >
      {status}
    </div>
  );
}
