import React from 'react';
import { getAllProducts } from '../../../sanity/request/allProductsRequest';
import BikeCategories from '@/components/common/BikeCategories/BikeCategories';

const OurBikes = async () => {
  const bikes = await getAllProducts();

  return <BikeCategories bikes={bikes} />;
};

export default OurBikes;
