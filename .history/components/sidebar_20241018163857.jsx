import { useState } from "react";
import {
  Grid2X2,
  Users,
  Folder,
  MessageSquareMore,
  Settings,
  LogOut,
  Headphones,
  Gift,
  ShoppingBag,
  Store,
} from "lucide-react";
import { useNavigation } from "@/lib/context";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { logOut } from "@/lib/functions";
export function Sidebar() {
  const {
    navigate,
    isDashboardSelected,
    isOrdersSelected,
    isUsersSelected,
    isInventorySelected,
    isConversationsSelected,
    isSettingsSelected,
    isSpecificUserSelected,
    isStoreSelected,
  } = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <div className="flex fixed top-0 left-0  flex-col pt-5 items-center px-5 w-[80px] bg-white rounded-md h-[100vh]">
      <Logo />
      <div className="flex flex-col space-y-4 mt-14">
        <span
          onClick={() => {
            navigate("dashboard");
          }}
          className={`p-2 ${
            isDashboardSelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Grid2X2 />
        </span>
        <span
          onClick={() => {
            navigate("orders");
          }}
          className={`p-2 ${
            isOrdersSelected || isOrdersSelected
              ? "bg-blue-600 scale-110 text-white"
              : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <ShoppingBag />
        </span>
        <span
          onClick={() => {
            navigate("users");
          }}
          className={`p-2 ${
            isUsersSelected || isSpecificUserSelected
              ? "bg-blue-600 scale-110 text-white"
              : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Users />
        </span>
        <span
          onClick={() => {
            navigate("inventory");
          }}
          className={`p-2 ${
            isInventorySelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Folder />
        </span>
        <span
          onClick={() => {
            navigate("conversations");
          }}
          className={`p-2 ${
            isConversationsSelected ? "bg-blue-600 scale-110 text-white" : null
          }  duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <MessageSquareMore />
        </span>
        <span
          onClick={() => {
            navigate("settings");
            console.log(isSettingsSelected);
          }}
          className={`p-2 ${
            isSettingsSelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Settings />
        </span>
        <span
          onClick={() => {
            navigate("store");
            console.log(isStoreSelected);
          }}
          className={`p-2 ${
            isStoreSelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Store />
        </span>
      </div>
      <div className="flex flex-col space-y-4 mt-32">
        <span className="p-2 bg-[#f3f9ff] w-fit rounded-md">
          <Headphones />
        </span>
        <span className="p-2 bg-[#f4e3cf] w-fit rounded-md">
          <Gift />
        </span>
      </div>
      <div className="justify-self-end mt-10">
        <div
          className="flex space-x-3 cursor-pointer"
          onClick={() => {
            logOut();
            router.push("/auth");
          }}
        >
          <LogOut /> <span className="hidden">Se deconnecter</span>
        </div>
      </div>
    </div>
  );
}
