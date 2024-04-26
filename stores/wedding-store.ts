'use client';

import { createStore } from 'zustand/vanilla';

type WeddingGallery = {
  id: number;
  src: string;
  alt: string;
};
type Location = {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
};

export type WeddingState = {
  person1: {
    firstName: string;
    lastName: string;
  };
  person2: {
    firstName: string;
    lastName: string;
  };
  date: string;
  location: Location;
  afterParty: {
    date: string;
    location: Location;
  };
  gallery: WeddingGallery[];
};

export type WeddingActions = {
  setWeddingData: (data: WeddingState) => void;
};

export type WeddingStore = WeddingState & WeddingActions;

export const initWeddingStore = (): WeddingState => {
  return defaultInitState;
};

export const defaultInitState: WeddingState = {
  person1: {
    firstName: 'John',
    lastName: 'Doe',
  },
  person2: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  date: '2024-08-01 13:30:00 GMT-0700',
  location: {
    name: 'Springfield Church',
    line1: '1234 Elm St',
    line2: '',
    city: 'Springfield',
    state: 'IL',
    zip: '12345',
    lat: 0,
    lng: 0,
  },
  afterParty: {
    date: '2024-08-01 18:00:00 GMT-0700',
    location: {
      name: 'Springfield Park',
      line1: '5678 Oak St',
      line2: '',
      city: 'Springfield',
      state: 'IL',
      zip: '12345',
      lat: 0,
      lng: 0,
    },
  },
  gallery: [
    {
      id: 1,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/1.jpg',
      alt: 'gallery-1',
    },
    {
      id: 2,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/2.jpg',
      alt: 'gallery-2',
    },
    {
      id: 3,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/3.jpg',
      alt: 'gallery-3',
    },
    {
      id: 4,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/4.jpg',
      alt: 'gallery-4',
    },
    {
      id: 5,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/5.jpg',
      alt: 'gallery-5',
    },
    {
      id: 6,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/6.jpg',
      alt: 'gallery-6',
    },
    {
      id: 7,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/7.jpg',
      alt: 'gallery-7',
    },
    {
      id: 8,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/8.jpg',
      alt: 'gallery-8',
    },
    {
      id: 9,
      src: 'https://gnzbtnbdtctxmncrsfta.supabase.co/storage/v1/object/public/wedding/gallery/9.jpg',
      alt: 'gallery-9',
    },
  ] as WeddingGallery[],
};

export const createWeddingStore = (
  initState: WeddingState = defaultInitState
) => {
  return createStore<WeddingStore>()((set) => ({
    ...initState,
    setWeddingData: (data: WeddingState) => set(data),
  }));
};
