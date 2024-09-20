import React from "react";
import { EmptyPage } from "@/components/emptyPage";

export function InventoryPage() {
  const data = [1];
  return (
    <div>
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
          <div>ok</div>
        )}
      </div>
    </div>
  );
}
