import React from 'react';

import './globals.css';

import { notoSerif, parisienne } from '@/utils/fonts';
import { WeddingStoreProvider } from '@/providers/wedding-store-provider';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${parisienne.variable}`}>
      <body>
        <main className={`min-h-screen flex flex-col items-center`}>
          <WeddingStoreProvider>{children}</WeddingStoreProvider>
        </main>
      </body>
    </html>
  );
}
