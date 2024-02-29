import { Tech } from "./tech";

export type Product = {
  id: string;
  title: string;
  content: string;
  image: ProductImage;
  usingTech?: Tech[];
  github: string;
  url: string;
  createDate: Date;
  publishedAt?: Date;
  revisedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductImage = {
  height: number;
  width: number;
  url: string;
};
