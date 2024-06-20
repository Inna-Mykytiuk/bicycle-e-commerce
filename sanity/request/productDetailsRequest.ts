import { client } from '../lib/client';
import { productDetailsQuery } from './productDetailsQuery';
import { PopularBike } from '@/types/types';

export const getProductDetails = async (
  slug: string,
): Promise<PopularBike | null> => {
  const data: PopularBike | null = await client.fetch(productDetailsQuery, {
    slug,
  });
  return data;
};
