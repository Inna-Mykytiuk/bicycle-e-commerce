import { groq } from 'next-sanity';

export const popularProductQuery = groq`*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    images,
    price,
    proce_id,
    "slug": slug.current,
    "categories": categories[] -> {
    name
    }
}`;


