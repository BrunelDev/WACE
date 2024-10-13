import { useState, useEffect } from "react";
import Image from "next/image";
import { Combobox } from "@/components/comboBox";
import { AvatarComponent } from "@/components/avatar";
import { useNavigation } from "@/lib/context";

export function TopBar() {
  const {
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
  } = useNavigation();
  const [currentTab, setCurrentTab] = useState("dashboard");
  useEffect(() => {
    setCurrentTab(
      isDashboardSelected
        ? "dashboard"
        : isOrdersSelected
        ? "orders"
        : isUsersSelected
        ? "users"
        : isConversationsSelected
        ? "conversations"
        : isInventorySelected
        ? "inventory"
        : isSettingsSelected
        ? "settings"
        : isSpecificUserSelected
        ? "users"
        : "dashboard"
    );
  }, [
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
  ]);
  return (
    <div className="bg-white fixed top-0 left-0 w-full">
      <div className="pt-8 pb-8 px-8 pl-[110px] text-2xl font-semibold border-b border-b-gray-200 flex justify-between">
        <h1>{currentTab}</h1>
        <div className="w-fit flex space-x-4">
          <Combobox
            title={"Hohn Doe"}
            items={[]}
            bgColor={"bg-[#FEF5EA]"}
            textColor={"text-black"}
          />
          <AvatarComponent
            src={"https://github.com/shadcn.png"}
            fallback={"AB"}
          />
        </div>
      </div>
      <div className="text-gray-300 flex space-x-3 pl-[110px]">
        <Image src={"Home.svg"} alt="home pic" width={20} height={20} />
        <span>/</span>
        <span>Clients</span>
      </div>
    </div>
  );
}
