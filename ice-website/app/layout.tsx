import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

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

export const metadata: Metadata = {
  title: 'American Ice Lines | Premium Crystal Clear Ice',
  description: 'Specialty ice products for businesses and homes. Beautiful, perfectly clear ice for the lowest cost with highest quality and reliability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}