"use client";
import { AddButton } from "@/components/addButton";
import { SummaryCard1, SummaryCard2 } from "@/components/summaryCards";
import { CustomerList } from "@/components/customerList";
import { AddCustomerCard } from "@/components/addCustomerCard";
import { DialogComponent } from "@/components/dialog";
import { DataTable } from "@/components/oneCustomerTable";
import {
  User,
  ShoppingCart,
  ShoppingBag,
  ChartPie,
  MapPin,
  Folder,
} from "lucide-react";
import { Combobox } from "@/components/combobox";
export function CustomersPage() {
  return (
    <div className="w-full pr-5">
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
              <AddCustomerCard />
            </div>
          }
        />
      </div>

      <div className="flex space-x-3 mt-3">
        <SummaryCard1 icon={<Folder color="black" />} />
        <SummaryCard1 icon={<Folder color="black" />} />
      </div>
      <div className="mt-5">
        <CustomerList />
      </div>
    </div>
  );
}

export function CustomerPage() {
  const data = [
    {
      orderType: "Livraison",
      orderDate: "12 novembre 2024",
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      orderType: "Livraison",
      orderDate: "12 novembre 2024",
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      orderType: "Livraison",
      orderDate: "12 novembre 2024",
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      orderType: "Livraison",
      orderDate: "12 novembre 2024",
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      orderType: "Livraison",
      orderDate: "12 novembre 2024",
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ];
  return (
    <div className="w-full pr-3">
      <div className="flex justify-between mb-3">
        <div className="flex space-x-3">
          <span className="flex space-x-3">
            <h1 className="text-lg font-bold">Numéro de commande</h1>
            <h1 className="text-gray-400 text-sm translate-y-[3px]">#77777</h1>
          </span>
          <span className="flex space-x-3">
            <h1 className="text-lg font-bold">Client depuis</h1>
            <h1 className="text-gray-400 text-sm translate-y-[3px]">#77777</h1>
          </span>
        </div>
        <div className="flex space-x-3">
          <Combobox
            title={"Modifier Client"}
            items={[]}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
          <AddButton
            title={"Suspendre Client"}
            className={"bg-red-500 h-fit"}
          />
        </div>
      </div>
      <div className="mb-2 w-full flex flex-wrap justify-between">
        <SummaryCard2
          icon={<User color="black" />}
          content={[
            { title: "Téléphone", value: "+23480656506330" },
            { title: "Email", value: "janet.adebayo@gmail.com" },
          ]}
        />
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
        <SummaryCard2
          className="bg-[#c7d0ff]"
          icon={<ChartPie color="blue" />}
          iconBg={"bg-[#c7d0ff]"}
          content={[{ title: "Total des commandes", value: "25000FCFA" }]}
        />
        <SummaryCard2
          icon={<ShoppingBag color="black" />}
          content={[
            { title: "Tous les clients", value: "0" },
            { title: "Actifs", value: "0" },
            { title: "Inactifs", value: "0" },
          ]}
        />
        <SummaryCard2
          icon={<ShoppingBag color="black" />}
          content={[
            { title: "Toutes les commandes", value: "0" },
            { title: "En attente", value: "0" },
            { title: "Achevées", value: "0" },
          ]}
        />

        <SummaryCard2
          icon={<ShoppingCart color="black" />}
          content={[{ title: "Panier abandonnés", value: "0" }]}
        />
      </div>
      <div className="">
        <DataTable data={data} user={"Manassé"} />
      </div>
    </div>
  );
}
