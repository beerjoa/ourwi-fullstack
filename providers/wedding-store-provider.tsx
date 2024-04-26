'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import {
  type WeddingState,
  createWeddingStore,
  initWeddingStore,
} from '@/stores/wedding-store';

export const WeddingStoreContext = createContext<StoreApi<WeddingState> | null>(
  null
);

export interface WeddingStoreProviderProps {
  children: ReactNode;
}

export const WeddingStoreProvider = ({
  children,
}: WeddingStoreProviderProps) => {
  const storeRef = useRef<StoreApi<WeddingState>>();

  if (!storeRef.current) {
    storeRef.current = createWeddingStore(initWeddingStore());
  }

  return (
    <WeddingStoreContext.Provider value={storeRef.current}>
      {children}
    </WeddingStoreContext.Provider>
  );
};

export const useWeddingStore = <T,>(
  selector: (store: WeddingState) => T
): T => {
  const weddingStoreContext = useContext(WeddingStoreContext);

  if (!weddingStoreContext) {
    throw new Error(
      'useWeddingStore must be used within a WeddingStoreProvider'
    );
  }

  return useStore(weddingStoreContext, selector);
};
