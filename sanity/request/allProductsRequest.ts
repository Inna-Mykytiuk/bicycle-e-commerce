import { client } from '../lib/client';
import { allProductsQuery } from './allProductsQuery';

export const getAllProducts = async () => {
  const data = await client.fetch(allProductsQuery);
  return data;
};