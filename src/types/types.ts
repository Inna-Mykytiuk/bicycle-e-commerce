export type PopularBike = {
  _id: string;
  name: string;
  description: string;
  images: { url: () => string }[];
  price: number;
  proce_id: string;
  currency: string;
  slug: string;
  categories: {
    name: string;
  }[];
};
