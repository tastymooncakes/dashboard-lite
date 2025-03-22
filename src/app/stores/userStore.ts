import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserStore {
    profilePicture: string | null;
    username: string | null;
    setUser: (user: Partial<UserStore>) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
      (set) => ({
        username: null,
        profilePicture: null,
        setUser: (user) => set((state) => ({ ...state, ...user })),
        clearUser: () =>
          set({
            username: null,
            profilePicture: null,
          }),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );