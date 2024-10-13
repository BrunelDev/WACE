import React from "react";
import Image from "next/image";

export function EmptyPage({ image, title, subTitle, button }) {
  return (
    <div className=" w-full h-[100vh] bg-white flex flex-col space-y-4 justify-center items-center">
      <Image src={image} alt={title} width={150} height={150} />
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <button className="bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        {button}
      </button>
    </div>
  );
}
