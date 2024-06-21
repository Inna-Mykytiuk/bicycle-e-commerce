import { defineType, defineField } from 'sanity';
import { PiBicycleBold } from 'react-icons/pi';

const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PiBicycleBold,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
    }),
    defineField({
      name: 'price_id',
      title: 'Stripe Product Price Id',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
  ],
});

export default product;
