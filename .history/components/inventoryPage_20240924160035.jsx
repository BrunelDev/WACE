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
import { ImageInput } from "@/components/imageInput";
export function InventoryPage() {
  const data = [1];
  return (
    <div>
      <div className="ml-auto mb-4 mr-3 flex justify-between">
        <span></span>
        <AddButton
          title={"Ajouter un produit"}
          className={"w-fit h-fit text-nowrap"}
        />
      </div>
      <div className="mb-2 w-full flex flex-wrap justify-between">
        <div className="w-[450px]">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
        <div className="w-[450px]">
          <SummaryCard2
            icon={<MapPin color="black" />}
            content={[
              {
                title: "Domicile",
                value: "No. 15 Adekunle Street, Yaba, Lagos State",
              },
              {
                title: "Addresse de facture",
                value: "No. 15 Adekunle Street, Yaba, Lagos State",
              },
            ]}
          />
        </div>

        <div className="w-[450px] m-2">
          <SummaryCard2
            className="bg-[#c7d0ff]"
            icon={<ChartPie color="blue" />}
            iconBg={"bg-[#c7d0ff]"}
            content={[{ title: "Total des commandes", value: "25000FCFA" }]}
          />
        </div>
        <div className="w-[450px]">
          <SummaryCard2
            icon={<ShoppingBag color="black" />}
            content={[
              { title: "Tous les clients", value: "0" },
              { title: "Actifs", value: "0" },
              { title: "Inactifs", value: "0" },
            ]}
          />
        </div>
        <div className="w-[450px]">
          <SummaryCard2
            icon={<ShoppingBag color="black" />}
            content={[
              { title: "Toutes les commandes", value: "0" },
              { title: "En attente", value: "0" },
              { title: "Achevées", value: "0" },
            ]}
          />
        </div>

        <div className="w-[450px]">
          <SummaryCard2
            icon={<ShoppingCart color="black" />}
            content={[{ title: "Panier abandonnés", value: "0" }]}
          />
        </div>
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
