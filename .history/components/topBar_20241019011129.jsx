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
    isStoreSelected,
    navigate,
  } = useNavigation();
  const [currentTab, setCurrentTab] = useState({
    name: "Dashboard",
    path: "dashboard",
  });
  useEffect(() => {
    setCurrentTab(
      isDashboardSelected
        ? { name: "Dashboard", path: "dashboard" }
        : isOrdersSelected
        ? { name: "Commandes", path: "orders" }
        : isUsersSelected
        ? { name: "Utilisateurs", path: "users" }
        : isConversationsSelected
        ? { name: "Conversations", path: "conversations" }
        : isInventorySelected
        ? { name: "Inventaire", path: "inventory" }
        : isSettingsSelected
        ? { name: "Parametres", path: "settings" }
        : isSpecificUserSelected
        ? { name: "Utilisateurs", path: "users" }
        : isStoreSelected
        ? { name: "Magasin", path: "store" }
        : { name: "Dashboard", path: "dashboard" }
    );
  }, [
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
    isStoreSelected,
  ]);
  return (
    <div className="bg-white fixed top-0 left-0 w-full">
      <div className="pt-8 pb-8 px-8 pl-[110px] text-2xl font-semibold border-b border-b-gray-200 flex justify-between">
        <h1>{currentTab.name}</h1>
        <div className="w-fit flex space-x-4">
          <Combobox
            title={localStorage.getItem("username")}
            items={[]}
            bgColor={"bg-[#FEF5EA]"}
            textColor={"text-black"}
          />
          <AvatarComponent
            src={
              localStorage.getItem("profileImage")
                ? localStorage.getItem("username")
                : "https://github.com/shadcn.png"
            }
            fallback={"AB"}
          />
        </div>
      </div>
      <div className="text-gray-300 flex space-x-3 pl-[110px]">
        <Image src={"Home.svg"} alt="home pic" width={20} height={20} />
        <span>/</span>
        <h1
          onClick={() => {
            navigate(currentTab.path);
          }}
        >
          {currentTab.name}
        </h1>
      </div>
    </div>
  );
}
