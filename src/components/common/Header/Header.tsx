'use client';

import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';
import { useShoppingCart } from 'use-shopping-cart';
import Nav from '../Nav/Nav';
import CartSidebar from '../CartSidebar/CartSidebar';

export const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-slate-900 py-6 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="transition-all duration-300 ease-in-out hover:text-current"
        >
          <h1 className="text-[26px]">
            <span className="text-accent">B</span>ikezz
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="roundeed-full absolute -bottom-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent text-sm font-medium text-white">
              {cartCount}
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};
