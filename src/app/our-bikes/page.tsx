import React from 'react';
import { getAllProducts } from '../../../sanity/request/allProductsRequest';

const OurBikes = async () => {
  const bikes = await getAllProducts();
  console.log(bikes);
  return <div>Our Bikes</div>;
};

export default OurBikes;
