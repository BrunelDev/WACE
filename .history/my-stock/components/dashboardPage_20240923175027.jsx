import React from "react";
import { CircularChart } from "@/components/circularChart";
import Image from "next/image";
export function DashboardPage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white rounded shadow-sm">
        <CircularChart />
      </div>
      <RecentOrders />
    </div>
  );
}

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
  ];
  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h1 className="text-xl font-semibold">Commandes récentes</h1>
      {orders.map((order, i) => {
        return (
          <div className="flex justify-between" key={i}>
            <div className="flex">
              <div className="flex space-x-3">
                <Image
                  className="rounded-md shadow"
                  src={order.image}
                  width={49}
                  height={49}
                  alt="Item image"
                />
                <div className="flex flex-col space-y-2 w-fit">
                  <h6>{order.article}</h6>
                  <h2>
                    {order.price} x {order.quantity}
                  </h2>
                </div>
              </div>

              <div>
                <h6 className="flex flex-col w-fit">
                  {order.date}
                  {order.status}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
