import React from 'react';
import { client } from '../../../../sanity/lib/client';
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

  return <div>Product Details Page</div>;
};

export default ProductDetails;
