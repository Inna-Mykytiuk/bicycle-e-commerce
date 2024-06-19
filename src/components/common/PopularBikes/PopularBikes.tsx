// 'use client';

import React, { useEffect, useState } from 'react';
import { getPopularProducts } from '../../../../sanity/request/popularProductRequest';
import { PopularBike } from './types';

const PopularBikes = async () => {
  const products = await getPopularProducts();
  console.log(products);

  return (
    <div>
      <h1>Popular Bikes</h1>
    </div>
  );
};

export default PopularBikes;
