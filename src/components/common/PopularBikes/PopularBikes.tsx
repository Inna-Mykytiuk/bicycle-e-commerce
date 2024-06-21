import React from 'react';
import Link from 'next/link';
import { getPopularProducts } from '../../../../sanity/request/popularProductRequest';
import PopularBikesCarousel from '../PopularBikesCarousel/PopularBikesCarousel';

const PopularBikes = async () => {
  const bikes = await getPopularProducts();

  // console.log(bikes);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="mb-[30px] text-center">
          The World&apos;s Premium Brands In One Destination
        </p>
        <PopularBikesCarousel bikes={bikes} />
        <Link
          href="/our-bikes"
          className="btn btn-accent mx-auto max-w-[200px]"
        >
          See All Bikes
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
