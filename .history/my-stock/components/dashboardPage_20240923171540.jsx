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
