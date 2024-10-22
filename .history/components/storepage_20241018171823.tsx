import React from "react";
import Image from "next/image";

export function Storepage() {
  return <div className=""></div>;
}

const ProductCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full h-48 object-cover"
        src="https://example.org/image.jpg"
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Name</div>
        <p className="text-gray-700 text-base">Description of the product</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
