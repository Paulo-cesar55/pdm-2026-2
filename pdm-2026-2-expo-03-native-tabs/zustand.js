import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useThemeStore = create(
  persist(
    (set) => ({
      modoEscuro: false,
      toggleModoEscuro: () =>
        set((state) => ({ modoEscuro: !state.modoEscuro })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
