'use client';

import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import DynamicFavicon from '../components/DynamicFavicon';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isFundSite = pathname?.startsWith('/fund');

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <DynamicFavicon />
        {!isFundSite && <Header />}
        <main className="flex-grow">
          {children}
        </main>
        {!isFundSite && <Footer />}
        {!isFundSite && <Chatbot />}
      </body>
    </html>
  );
}