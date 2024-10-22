import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProduits } from "@/lib/functions";
import { InputComponent } from "@/components/input";
import { Search } from "lucide-react";

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
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="w-[280px]">
          <InputComponent
            placeholder={"Rechercher un produit..."}
            type={"text"}
            icon={<Search />}
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        {data.map(
          (
            product: {
              image: string;
              nom: string;
              description: string;
              categorie: string;
              id: number;
            },
            i
          ) => {
            return (
              <div key={i}>
                <ProductCard
                  nom={product.nom}
                  image={product.image}
                  productName={product.nom}
                  description={product.description}
                  category={product.categorie}
                  id={product.id}
                />
              </div>
            );
          }
        )}
      </div>
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
  productName: string;
  nom: string;
  description: string;
  category: string;
  id: number;
}) => {
  return (
    <div className="max-w-[300px] rounded overflow-hidden shadow-lg hover:scale-[1.03] duration-200 bg-white flex flex-col justify-center items-center px-4 py-4 my-2">
      <Image
        width={300}
        height={200}
        className="rounded-md"
        src={image ? image : "/prod.png"}
        alt="Product Image"
      />
      <div className="w-full my-2">
        <CategoryTag category={category} />
      </div>

      <div className="px-1">
        <div className="font-bold text-xl mb-2">
          {productName.toUpperCase()}
        </div>
        <p className="text-gray-700 text-base h-20">
          {description.substring(0, 100) + "..."}
        </p>
      </div>
      <div className="w-full mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
          Commander
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
