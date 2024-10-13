import { create } from "zustand";

export const useNavigation = create((set) => ({
  isDescriptionSelected: true,
  isCoursesSelected: false,
  isReviewSelected: false,
  navigate: (link) =>
    set({
      isDescriptionSelected: link === "description",
      isCoursesSelected: link === "courses",
      isReviewSelected: link === "review",
    }),
}));
