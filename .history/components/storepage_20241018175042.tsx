import React from "react";
import Image from "next/image";
import { ImageDown } from "lucide-react";

export function Storepage() {
  return (
    <div className="">
      <ProductCard />
    </div>
  );
}

const ProductCard = () => {
  return (
    <div className="w-fit rounded overflow-hidden shadow-lg hover:scale-[1.03] duration-200 bg-white">
      <Image width={300} height={100} src="/cafe.png" alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Name</div>
        <p className="text-gray-700 text-base">Description of the product</p>
        <CategoryTag category="Motor" />
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter à votre panier
        </button>
      </div>
    </div>
  );
};
const CategoryTag = ({ category }: { category: string }) => {
  return (
    <span
      className={`inline-block bg-gray-400 px-3 py-1 text-sm text-white rounded-lg`}
    >
      {category}
    </span>
  );
};
