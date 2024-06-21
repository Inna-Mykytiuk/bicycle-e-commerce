import React from 'react';
import { getAllProducts } from '../../../sanity/request/allProductsRequest';
import BikeCategories from '@/components/common/BikeCategories/BikeCategories';

const OurBikes = async () => {
  const bikes = await getAllProducts();
  // console.log(bikes);
  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
