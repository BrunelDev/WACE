import React from "react";
import { EmptyPage } from "@/components/emptyPage";
import { ProductsTable } from "@/components/productsTable";
import { AddButton } from "@/components/addButton";
export function InventoryPage() {
  const data = [1];
  return (
    <div>
      <div className="ml-auto mb-4 mr-3 flex justify-between">
        <span></span>
        <AddButton title={"Ajouter un produit"} className={"ml"} />
      </div>
      <div className="pr-3">
        {data.length === 0 ? (
          <EmptyPage
            image={"/orderImage.png"}
            title={"Pas encore de Produits"}
            subTitle={
              "Add products to your store and start selling to see orders here."
            }
            button={"Ajouter un Produit"}
          />
        ) : (
          <div>
            <ProductsTable />
          </div>
        )}
      </div>
    </div>
  );
}
