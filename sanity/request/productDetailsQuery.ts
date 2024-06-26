import { groq } from 'next-sanity';

export const productDetailsQuery = groq`*[_type == 'product' && slug.current == $slug][0] {
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
