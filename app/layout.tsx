'use client';

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  const loginSegment = useSelectedLayoutSegment('auth');
  const routeSegment = useSelectedLayoutSegment();

  console.log({
    loginSegment,
    routeSegment,
    useSelectedLayoutSegments: useSelectedLayoutSegments(),
    useSelectedLayoutSegmentsAuth: useSelectedLayoutSegments('auth'),
  });
  const loginSegmentOutput = `${loginSegment} (${typeof loginSegment})`;
  const routeSegmentOutput = `${routeSegment} (${typeof routeSegment})`;
  return (
    <html lang="en">
      <body>
        <section className="p-20">
          <nav className="flex space-x-2 text-blue-300 underline">
            <Link href="/">Main</Link>
            <Link href="/foo">Foo (regular page)</Link>
            <Link href="/login">Login (/app/@auth/login)</Link>
            <Link href="/reset">Reset (/app/@auth/reset)</Link>
            <Link href="/reset/withEmail">
              Reset with Email (/app/@auth/reset/withEmail)
            </Link>
            <Link href="/reset/withMobile">
              Reset with Mobile (/app/@auth/reset/withMobile)
            </Link>
          </nav>
          <div className="m-4">
            loginSegment (parallel route):{' '}
            <div id="loginSegment">{loginSegmentOutput}</div>
          </div>
          <div className="m-4">
            routeSegment (app route):{' '}
            <div id="routeSegment">{routeSegmentOutput}</div>
          </div>
          <section>{children}</section>
          <section>{auth}</section>
        </section>
      </body>
    </html>
  );
}
