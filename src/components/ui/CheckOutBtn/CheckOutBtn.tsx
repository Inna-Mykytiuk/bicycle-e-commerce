'use client';

import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const CheckOutBtn = () => {
  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { redirectToCheckout } = useShoppingCart();

  return (
    <button className="btn btn-primary w-full" onClick={handleCheckout}>
      Proceed to checkout
    </button>
  );
};

export default CheckOutBtn;
