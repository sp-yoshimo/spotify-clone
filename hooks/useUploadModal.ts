import { create } from "zustand";

interface UploadModaltore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUploadModal = create<UploadModaltore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useUploadModal