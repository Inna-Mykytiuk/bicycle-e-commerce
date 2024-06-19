import { client } from '../lib/client';
import { popularProductQuery } from './popularProductQuery';

export const getPopularProducts = async () => {
  const data = await client.fetch(popularProductQuery);
  return data;
};

