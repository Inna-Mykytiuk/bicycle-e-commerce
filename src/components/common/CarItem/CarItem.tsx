'use client';

import React from 'react';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { urlForImage } from '../../../../sanity/lib/image';
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6';

interface CarItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    images?: { url: () => string }[];
  };
}

const CarItem: React.FC<CarItemProps> = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  const imageUrl =
    item.images && item.images[0]
      ? typeof item.images[0] === 'string'
        ? item.images[0]
        : urlForImage(item.images[0])
      : '';
  return (
    <div className="mb-4 flex h-[120px] w-full items-center justify-between border-b">
      <div>
        <Image
          src={imageUrl}
          priority
          alt={item.name}
          width={110}
          height={110}
          className="h-full max-w-[110px] object-contain"
        />
      </div>
      <div className="flex w-full max-w-[180px] flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold">{item.name}</h5>
          <button
            onClick={() => removeItem(item.id)}
            aria-label="delete button"
          >
            <FaX className="text-sm" />
          </button>
        </div>
        {/*increment and decrement buttons, price*/}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => decrementItem(item.id)}
              aria-label="decrement button"
            >
              <FaMinus className="text-[10px]" />
            </button>
            <p className="font-semibold">{item.quantity}</p>
            <button
              onClick={() => incrementItem(item.id)}
              aria-label="increment button"
            >
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="text-balance text-right font-semibold">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
