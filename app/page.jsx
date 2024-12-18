"use client";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import { useNavigation } from "@/lib/context";
import { InventoryPage } from "@/components/inventoryPage";
import { SettingsPage } from "@/components/settingsPage";
import { CustomerPage, CustomersPage } from "@/components/customersPage";
import { ChatPage } from "@/components/chatPage";
import { DashboardPage } from "@/components/dashboardPage";
import { OrdersPage } from "@/components/ordersPage";
import { useRouter } from "next/navigation";
import { Storepage } from "@/components/storepage";
import { AddProduct } from "@/components/addProduct";
export default function page() {
  const router = useRouter();
  const {
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
    isStoreSelected,
    isAddProductSelected,
  } = useNavigation();

  if (!localStorage.getItem("access_token")) {
    return router.replace("/auth");
  } else {
    return (
      <div>
        <div className="flex space-x-5 w-full">
          <div className="w-[100px] z-50">
            <Sidebar />
          </div>
          <div className="w-full mt-[146px] pr-2">
            {isUsersSelected ? (
              <div>
                <CustomersPage />
              </div>
            ) : isSpecificUserSelected ? (
              <CustomerPage />
            ) : isDashboardSelected ? (
              <DashboardPage />
            ) : isOrdersSelected ? (
              <OrdersPage />
            ) : isInventorySelected ? (
              <InventoryPage />
            ) : isConversationsSelected ? (
              <ChatPage />
            ) : isSettingsSelected ? (
              <SettingsPage />
            ) : isStoreSelected ? (
              <Storepage />
            ) : isAddProductSelected ? (
              <AddProduct />
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
}
