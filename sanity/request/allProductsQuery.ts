import { groq } from 'next-sanity';

export const allProductsQuery = groq`*[_type == 'product'] {
  _id,
  name,
  description,
  images,
  price,
  price_id,
  "slug": slug.current,
  "categories": categories[] -> {
    name
  }
}`;
