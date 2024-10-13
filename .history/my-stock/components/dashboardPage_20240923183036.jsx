import React from "react";
import { CircularChart } from "@/components/circularChart";
import Image from "next/image";
import { Status } from "@/components/status";
export function DashboardPage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white rounded shadow-sm">
        <CircularChart />
      </div>
      <div className="w-[400px]">
        <RecentOrders />
      </div>
    </div>
  );
}

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      price: 120000,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
  ];
  return (
    <div className="bg-white rounded-sm shadow-sm p-4 w-full flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-xl font-semibold">Commandes récentes</h1>
        <div className="space-y-[6px]">
          {orders.map((order, i) => {
            return (
              <div
                className="flex justify-between text-sm pb-2 border-b border-b-gray-100"
                key={i}
              >
                <div className="flex w-full">
                  <div className="flex space-x-3 w-full">
                    <Image
                      className="rounded-md shadow w-fit h-fit"
                      src={order.image}
                      width={49}
                      height={49}
                      alt="Item image"
                    />
                    <div className="flex flex-col space-y-1 w-fit">
                      <h6 className="text-gray-600">{order.article}</h6>
                      <h2 className="font-semibold">
                        {order.price} x {order.quantity}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h6 className="flex flex-col w-fit text-gray-400 text-nowrap">
                      {order.date}
                    </h6>
                    <Status
                      status={order.status}
                      className={`${
                        order.status === "Suspendu"
                          ? "text-[#CC5F5F] bg-[#fdf1f1]"
                          : order.status === "En cours"
                          ? "text-[#5570F1] bg-[#d9e0ff]"
                          : null
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
