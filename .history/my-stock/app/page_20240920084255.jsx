"use client";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import { EmptyPage } from "@/components/emptyPage";
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
    isspecificUserSelected,
    navigate,
  } = useNavigation;
  return (
    <div>
      <div className="flex space-x-5 w-full">
        <div className="w-[100px] z-50">
          <Sidebar />
        </div>
        <div className="w-full mt-4">
          {isCustomersSelected ? (
            <div
              onClick={() => {
                setIsConsumersSelected(true);
                setIsOneConsumerSelected(true);
              }}
            >
              <EmptyPage />
            </div>
          ) : (
            <CustomerPage />
          )}
        </div>
      </div>

      <div className="fixed w-full top-0 left-0">
        <TopBar />
      </div>
    </div>
  );
}