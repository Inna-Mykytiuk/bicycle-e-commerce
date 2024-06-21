import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';

import { classnames } from '@/utils/classnames';
import CartProvider from '@/components/common/CartProvider/CartProvider';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Toaster } from '@/components/ui/toaster';

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
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
          {/* <div className="h-[2000px]"></div> */}
        </CartProvider>
      </body>
    </html>
  );
}
