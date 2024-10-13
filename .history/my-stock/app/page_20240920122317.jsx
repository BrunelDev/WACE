"use client";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import { useNavigation } from "@/lib/context";
import { EmptyPage } from "@/components/emptyPage";
import { InventoryPage } from "@/components/inventoryPage";
import { SettingsPage } from "@/components/settingsPage";
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
  } = useNavigation();
  console.log(
    isDashboardSelected,
    isOrdersSelected,
    isInventorySelected,
    isConversationsSelected
  );
  return (
    <div>
      <div className="flex space-x-5 w-full">
        <div className="w-[100px] z-50">
          <Sidebar />
        </div>
        <div className="w-full mt-[146px]">
          {isUsersSelected ? (
            <CustomersPage />
          ) : isSpecificUserSelected ? (
            <CustomerPage />
          ) : isDashboardSelected ? (
            "Dashboard"
          ) : isOrdersSelected ? (
            "Commandes"
          ) : isInventorySelected ? (
            <InventoryPage />
          ) : isConversationsSelected ? (
            "Converdations"
          ) : isSettingsSelected ? (
            <SettingsPage />
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
