import React from "react";
import { EmptyPage } from "@/components/emptyPage";

export function InventoryPage() {
  return (
    <div>
      <EmptyPage
        image={"/orderImage.png"}
        title={"Pas encore de Produits"}
        subTitle={
          "Add products to your store and start selling to see orders here."
        }
        button={"Ajouter un Produit"}
      />
    </div>
  );
}
