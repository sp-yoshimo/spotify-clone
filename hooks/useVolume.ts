import { create } from "zustand"

interface VolumeStore{
    value: number,
    onChange: (value: number) => void;
};

const useVolume = create<VolumeStore>((set)=>({
    value: 1,
    onChange: (value: number) => set({value: value}) 
}));

export default useVolume;