import { Noto_Serif, Freehand, Parisienne } from 'next/font/google';

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
});

export const freehand = Freehand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-freehand',
});

export const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-parisienne',
});
