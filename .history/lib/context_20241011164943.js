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

export const useStats = create((set) => ({
  customerCount: 0,
  activeCustomerCount: 0,
  inactiveCustomerCount: 0,
  newCustomerCount: 0,
  totalOrders: 0,
  totalSales: 0,
  totalProfit: 0,
  productsCount: 0,
  ActiveProductCount: 0,
  inactiveProductCount: 0,
  expiredProductsCount: 0,

  setCustomerCount: (val) => set({ customerCount: val }),
  setActiveCustomerCount: (val) => set({ activeCustomerCount: val }),
  setNewCustomerCount: (val) => set({ newCustomerCount: val }),
  setTotalOrders: (val) => set({ totalOrders: val }),
  setTotalSales: (val) => set({ totalSales: val }),
  setTotalProfit: (val) => set({ totalProfit: val }),
  setProductsCount: (val) => set({ roductsCount: val }),
  setActiveProductCount: (val) => set({ activeProductCount: val }),
  setInactiveProductCount: (val) => set({ inactiveProductCount: val }),
  setExpiredProductsCount: (val) => set({ expiredProductsCount: val }),
}));
