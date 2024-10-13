import React from "react";

import { CustomersTable } from "@/components/customersTable";
export function CustomerList() {
  return (
    <div className="bg-white rounded-md w-full">
      <div className="p-4 ">
        <CustomersTable />
      </div>
    </div>
  );
}
