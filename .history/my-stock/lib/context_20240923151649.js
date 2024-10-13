import { create } from "zustand";

export const useNavigation = create((set) => ({
  isDashboardSelected: false,
  isOrdersSelected: false,
  isUsersSelected: true,
  isInventorySelected: false,
  isConversationsSelected: false,
  isSettingsSelected: false,
  isSpecificUserSelected: false,
  navigate: (link) =>
    set({
      isDashboardSelected: link === "dashboard",
      isOrdersSelected: link === "orders",
      isUsersSelected: link === "users",
      isInventorySelected: link === "inventory",
      isConversationsSelected: link === "conversations",
      isSettingsSelected: link === "settings",
      isSpecificUserSelected: link === "specificUser",
    }),
}));

export const useAuthForm = create((set) => ({
  showLoginForm: true,
  setShowLoginForm: (val) => set(() => ({ showLoginForm: val })),
}));
