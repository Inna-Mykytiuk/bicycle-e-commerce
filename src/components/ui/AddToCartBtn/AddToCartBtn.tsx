'use client';

import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '../use-toast';

interface AddToCartBtnProps {
  btnStyles: string;
  text?: string;
  icon?: React.ReactNode;
  id?: string;
  currency: string;
  name: string;
  description: string;
  images: { url: () => string }[];
  price: number;
  price_id: string;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  btnStyles,
  text,
  icon,
  id,
  currency,
  name,
  description,
  images,
  price,
  price_id,
}) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const bike = {
    id,
    currency,
    name,
    description,
    images,
    price,
    price_id,
  };

  return (
    <button
      onClick={() => {
        addItem(bike);
        toast({
          title: `${name} has been added to cart`,
        });
      }}
      className={`${btnStyles}`}
      aria-label="Add to cart button"
    >
      <p>{text}</p>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
