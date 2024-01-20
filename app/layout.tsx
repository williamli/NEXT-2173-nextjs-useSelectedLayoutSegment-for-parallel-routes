'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
  const routeSegments = useSelectedLayoutSegment();
  console.log({ loginSegments, routeSegments });
  const loginSegmentsOutput = `${loginSegments} (${typeof loginSegments})`;
  const routeSegmentsOutput = `${routeSegments} (${typeof routeSegments})`;
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="p-20">
          <nav className="flex space-x-2 text-blue-300 underline">
            <Link href="/">Main</Link>
            <Link href="/login">Login (/app/@auth/login)</Link>
            <Link href="/reset">Reset (/app/@auth/reset)</Link>
            <Link href="/foo">Foo (regular page)</Link>
          </nav>
          <div>loginSegments (parallel route): {loginSegmentsOutput}</div>
          <div>routeSegmentsOutput (app route): {routeSegmentsOutput}</div>
          <section>{children}</section>
          <section>{auth}</section>
        </section>
      </body>
    </html>
  );
}
