'use client';

import React from 'react';
import { PopularBike } from '../../../types/types';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingBag } from 'react-icons/cg';
import AddToCartBtn from '../../ui/AddToCartBtn/AddToCartBtn';

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
        <div className="flex h-full w-full items-center justify-center bg-primary/5 transition-all duration-300 ease-in-out group-hover:bg-primary/10">
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
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-[10px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <AddToCartBtn
            id={bike._id}
            name={bike.name}
            currency="USD"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link
            href={`/product/${bike.slug}`}
            className="btn-icon btn-primary  max-w-[200px]"
          >
            <CgEye />
          </Link>
        </div>
      </div>
      <h5 className="mb-2 font-semibold text-gray-400">
        {bike.categories[0].name} bike
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">${bike.price}</div>
    </div>
  );
};

export default Bike;
