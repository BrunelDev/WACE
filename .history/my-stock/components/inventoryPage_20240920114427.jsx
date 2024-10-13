import React from "react";
import { EmptyPage } from "@/components/emptyPage";
import { ProductsTable } from "@/components/productsTable";
import { AddButton } from "@/components/addButton";
import { SummaryCard2 } from "@/components/summaryCards";
import {
  User,
  ShoppingCart,
  ShoppingBag,
  ChartPie,
  MapPin,
  Folder,
} from "lucide-react";
export function InventoryPage() {
  const data = [1];
  return (
    <div>
      <div className="ml-auto mb-4 mr-3 flex justify-between">
        <div className="mb-2 w-full flex flex-wrap justify-between">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
        <AddButton
          title={"Ajouter un produit"}
          className={"w-fit h-fit text-nowrap"}
        />
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
