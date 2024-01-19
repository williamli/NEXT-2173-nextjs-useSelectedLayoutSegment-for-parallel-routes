'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  const loginSegments = useSelectedLayoutSegment('auth');
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>loginSegments: {loginSegments}</div>
        <section>{children}</section>
        <section>{auth}</section>
      </body>
    </html>
  );
}
