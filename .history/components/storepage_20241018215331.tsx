import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImageDown } from "lucide-react";
import { getProduits } from "@/lib/functions";

export function Storepage() {
  const [data, setData] = useState([]);
  const [showLoarder, setShowLoarder] = useState(false);

  useEffect(() => {
    setShowLoarder(true);

    getProduits()
      .then((res: []) => {
        console.log("--------------------------------------", res);
        setData(res);
        setShowLoarder(false);
      })
      .catch((err: Error) => {
        console.error(err);
        setShowLoarder(false);
      });
  }, []);
  return (
    <div className="">
      {data.map(
        (
          product: {
            image: string;
            nom: string;
            description: string;
            category: string;
            id: number;
          },
          i
        ) => {
          return (
            <div key={i}>
              <ProductCard
                image={product.image}
                productName={product.nom}
                description={product.description}
                category={product.category}
                id={product.id}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

const ProductCard = ({
  image,
  productName,
  description,
  category,
  id,
}: {
  image: string;
  nom: string;
  description: string;
  category: string;
  id: number;
}) => {
  return (
    <div className="w-fit rounded overflow-hidden shadow-lg hover:scale-[1.03] duration-200 bg-white">
      <Image width={300} height={100} src="/cafe.png" alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <CategoryTag category="Motor" />
      </div>
      <div className="px-6 py-4 flex justify-center items-center">
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
