import React from "react";
import {
  Grid2X2,
  Users,
  Folder,
  MessageSquareMore,
  Settings,
  LogOut,
  Headphones,
  Gift,
} from "lucide-react";
import { useNavigation } from "@/lib/context";

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
  } = useNavigation();
  return (
    <div className="flex fixed top-0 left-0  flex-col justify-center items-center space-y-4 px-5 w-[100px] bg-white rounded-md h-[100vh]">
      <div className="flex flex-col space-y-10">
        <span className="p-2 hover:bg-gray-200 w-fit rounded-md duration-200 hover:scale-110">
          <Grid2X2 />
        </span>
        <span
          className={`p-2 ${
            isUsersSelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Users
            className="text-white"
            onClick={() => {
              navigate("users");
            }}
          />
        </span>
        <span
          className={`p-2 ${
            isInventorySelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Folder
            onClick={() => {
              navigate("inventory");
            }}
          />
        </span>
        <span
          className={`p-2 ${
            isConversationsSelected ? "bg-blue-600 scale-110 text-white" : null
          }  duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <MessageSquareMore
            onClick={() => {
              navigate("conversations");
            }}
          />
        </span>
        <span
          className={`p-2 ${
            isSettingsSelected ? "bg-blue-600 scale-110 text-white" : null
          } duration-200 hover:bg-gray-200 w-fit rounded-md hover:scale-110`}
        >
          <Settings
            onClick={() => {
              navigate("settings");
              console.log(isSettingsSelected);
            }}
          />
        </span>
      </div>
      <div className="flex flex-col space-y-10">
        <span className="p-2 bg-[#f3f9ff] w-fit rounded-md">
          <Headphones />
        </span>
        <span className="p-2 bg-[#f4e3cf] w-fit rounded-md">
          <Gift />
        </span>
      </div>
      <div className="justify-self-end">
        <LogOut />
      </div>
    </div>
  );
}
