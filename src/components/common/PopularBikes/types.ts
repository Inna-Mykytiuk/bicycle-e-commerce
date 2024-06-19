export type PopularBike = {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  proce_id: string;
  slug: string;
  categories: {
    name: string;
  }[];
};