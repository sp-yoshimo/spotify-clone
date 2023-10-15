import { create } from "zustand";

interface SubscribeModaltore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSubscribeModal = create<SubscribeModaltore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useSubscribeModal