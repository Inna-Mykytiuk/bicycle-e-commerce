'use client';

import React from 'react';
import { CartProvider as CProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY || '';

  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
