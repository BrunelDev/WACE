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
  } = useNavigation();
  console.log(
    isDashboardSelected,
    isOrdersSelected,
    isInventorySelected,
    isConversationsSelected
  );
  if (!localStorage.getItem("access_token")) {
    return <div>ok</div>; //router.replace("/auth");
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
                {/** */}
                <div className="flex flex-row h-[300px] w-[500px]">
                  <div className="bg-green-600 w-full"></div>
                  <div className="flex flex-col w-full">
                    <div className="bg-yellow-400 w-full h-1/2"></div>
                    <div className="bg-red-400 w-full h-1/2"></div>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/3 h-40 bg-green-600"></div>
                  <div class="w-2/3">
                    <div class="h-1/2 bg-yellow-400"></div>
                    <div class="h-1/2 bg-red-600"></div>
                  </div>
                </div>
                {/** */}
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
