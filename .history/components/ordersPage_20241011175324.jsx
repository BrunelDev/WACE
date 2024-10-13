import React from "react";
import { EmptyPage } from "@/components/emptyPage";
import { OrdersTable } from "@/components/ordersTable";
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
import { DialogComponent } from "@/components/dialog";
import { AddOrderCard } from "@/components/addOrderCard";
import { ImageInput } from "@/components/imageInput";
export function OrdersPage() {
  const data = [1];
  return (
    <div>
      <div className="ml-auto mb-4 mr-3 flex justify-between">
        <span></span>
        <div className="ml-auto w-fit">
          <DialogComponent
            trigger={
              <AddButton
                title={"Ajouter un Nouveau Client"}
                onClick={() => {
                  return;
                }}
              />
            }
            dialogContent={
              <div>
                <AddOrderCard />
              </div>
            }
          />
        </div>
      </div>
      <div className="mb-2 w-full flex flex-wrap justify-between">
        <div className="w-[450px] my-2">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
        <div className="w-[450px] my-2">
          <SummaryCard2
            icon={<MapPin color="black" />}
            content={[
              {
                title: "Domicile",
                value: "No. 15 Adekunle Street, Yaba, Lagoos",
              },
              {
                title: "Addresse de facture",
                value: "No. 15 Adekunle Street, Yaba, Lagos",
              },
            ]}
          />
        </div>

        <div className="w-[450px] my-2">
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
            <OrdersTable />
          </div>
        )}
      </div>
    </div>
  );
}
