import React from 'react';
// import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import AddToCartBtn from '@/components/ui/AddToCartBtn/AddToCartBtn';
import Link from 'next/link';
import { getProductDetails } from '../../../../sanity/request/productDetailsRequest';

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCcw,
  ChevronLeft,
} from 'lucide-react';

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const bike = await getProductDetails(params.slug);
  // console.log(bike);

  if (!bike) {
    return <div>Product not found</div>;
  }

  return (
    <section className="pb-32 pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14 lg:flex-row">
          <div className="flex h-[460px] items-center justify-center bg-primary/5 lg:w-[700px] xl:h-[540px] xl:flex-1">
            <Image
              src={
                typeof bike.images[0] === 'string'
                  ? bike.images[0]
                  : urlForImage(bike.images[0])
              }
              alt={bike.name}
              priority
              width={473}
              height={290}
            />
          </div>
          {/*details*/}
          <div className="flex flex-1 flex-col items-start justify-center gap-8 ">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col items-start gap-6">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-bold text-accent">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn
                price_id={bike.price_id}
                text={'Add to cart'}
                btnStyles="btn btn-accent"
                currency={bike.currency}
                name={bike.name}
                description={bike.description}
                images={bike.images}
                price={bike.price}
              />
            </div>
            {/*info*/}
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free sgipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCcw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Bike size={20} className="text-accent" />
                <p>
                  The bicycles are partially assembled and benefit from
                  transport insurance
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
