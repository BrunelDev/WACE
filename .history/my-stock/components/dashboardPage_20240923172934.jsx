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
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
    {
      id: 1,
      amount: 1200,
      status: "pending",
      article: "iPhone 13",
      image: "/logo.png",
      date: "12 Sept 2022",
    },
  ];
  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h1 className="text-xl font-semibold">Commandes récentes</h1>
    </div>
  );
};
