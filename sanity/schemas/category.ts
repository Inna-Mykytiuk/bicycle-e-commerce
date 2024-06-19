import { defineType, defineField } from 'sanity';

const category = defineType({
  name: 'category',
  title: 'CAtegory',
  type: 'document',
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
      type: 'number',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});

export default category;
