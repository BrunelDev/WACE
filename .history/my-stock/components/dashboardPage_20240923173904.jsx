import React from "react";
import { CircularChart } from "@/components/circularChart";

export function DashboardPage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white rounded shadow-sm">
        <CircularChart />
      </div>
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
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      price: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
  ];
  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h1 className="text-xl font-semibold">Commandes récentes</h1>
      {orders.map((order, i) => {
        return (
          <div className="flex justify-between" key={i}>
            <div>
              <Image />
              <div className="flex flex-col w-fit">
                <h6>{order.article}</h6>
                <h2>
                  {order.price} x {order.quantity}
                </h2>
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