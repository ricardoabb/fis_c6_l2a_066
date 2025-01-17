'use client';
import { create } from 'zustand';

interface MapStore {
    currentId: string,
    isActiveId: boolean,    
    setCurrentId: (id: string, isActiveId: boolean) => void
    setIsActiveId: (isActiveId: boolean) => void
}

export const useMapStore = create<MapStore>((set) => ({
    currentId: '0',
    isActiveId: false,
    setCurrentId: (id: string, isActiveId: boolean) => set({ currentId: id, isActiveId: isActiveId }),
    setIsActiveId: (isActiveId: boolean) => set({ isActiveId: isActiveId }),

}));