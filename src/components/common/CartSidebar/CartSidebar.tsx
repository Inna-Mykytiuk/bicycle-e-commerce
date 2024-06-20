'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useShoppingCart } from 'use-shopping-cart';
import { ScrollArea } from '@/components/ui/scroll-area';
import CarItem from '../CarItem/CarItem';
import CheckOutBtn from '@/components/ui/CheckOutBtn/CheckOutBtn';

const CartSidebar = () => {
  const {
    cartCount = 0,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-12 text-left">
            Shopping Cart ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <h5 className="text-black/50">Your cart is empty</h5>
            </div>
          ) : (
            <ScrollArea className="mb-4 h-[70vh] pr-4 xl:h-[74vh]">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CarItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div>
            <div className="flex justify-between font-semibold">
              <p className="mb-5 uppercase">Total</p>
              <p>${totalPrice}</p>
            </div>
            <CheckOutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
