export type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  isSpecial: boolean;
  category: Category;
  counts: number;
};

export type Category = {
  _id: string;
  name: string;
};

export type Icon = {
  iconImgUrl: string;
  iconDescription: string;
};
