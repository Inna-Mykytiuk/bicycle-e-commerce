'use client';

import React from 'react';
import { PopularBike } from '../PopularBikes/types';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingCart } from 'react-icons/cg';

interface BikeProps {
  bike: PopularBike;
}

const Bike: React.FC<BikeProps> = ({ bike }) => {
  // console.log(bike);

  const popularBikeCat = bike.categories.find(bike => bike.name === 'popular');
  // console.log(popularBikeCat);

  return (
    <div className="group">
      <div className="relative mb-5 h-[328px] overflow-hidden border p-4">
        <div className="bg-primary/5 group-hover:bg-primary/10 flex h-full w-full items-center justify-center transition-all duration-300 ease-in-out">
          {/*badge*/}
          {popularBikeCat && (
            <div className="absolute left-8 top-8 bg-accent px-3 text-sm font-medium uppercase text-white">
              Popular
            </div>
          )}
          <Image
            src={
              typeof bike.images[0] === 'string'
                ? bike.images[0]
                : urlForImage(bike.images[0])
            }
            alt={bike.name}
            width={240}
            height={147}
          />
        </div>
        {/*buttons group*/}
        <div></div>
      </div>
    </div>
  );
};

export default Bike;
