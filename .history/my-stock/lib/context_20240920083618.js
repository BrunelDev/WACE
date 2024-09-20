import { create } from "zustand";

export const useNavigation = create((set) => ({
  isDashboardSelected: true,
  isOrdersSelected: false,
  isUsersSelected: false,
  isInventorySelected: false,
  isConversationsSelected: false,
  isSettingsSelected: false,
  navigate: (link) =>
    set({
      isDashboardSelected: link === "dashboard",
      isOrdersSelected: link === "orders",
      isUsersSelected: link === "users",
      isInventorySelected: link === "inventory",
      isConversationsSelected: link === "conversations",
      isSettingsSelected: link === "settings",
    }),
}));
