"use client";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import { useNavigation } from "@/lib/context";

import { CustomerPage, CustomersPage } from "@/components/customersPage";
export default function page() {
  const {
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
  } = useNavigation;
  return (
    <div>
      <div className="flex space-x-5 w-full">
        <div className="w-[100px] z-50">
          <Sidebar />
        </div>
        <div className="w-full mt-4">
          {isUsersSelected ? (
            <CustomerPage />
          ) : isSpecificUserSelected ? (
            <CustomersPage />
          ) : isDashboardSelected ? (
            "Dashboard"
          ) : isOrdersSelected ? (
            "Commandes"
          ) : isInventorySelected ? (
            "Inventaire"
          ) : isConversationsSelected ? (
            "Converdations"
          ) : isSettingsSelected ? (
            "setting"
          ) : (
            <CustomersPage />
          )}
        </div>
      </div>

      <div className="fixed w-full top-0 left-0">
        <TopBar />
      </div>
    </div>
  );
}
