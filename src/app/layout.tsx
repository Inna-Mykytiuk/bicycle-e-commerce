import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';

import { classnames } from '@/utils/classnames';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={classnames(
          rajdhani.variable,
          'flex h-full min-h-screen flex-col ',
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
