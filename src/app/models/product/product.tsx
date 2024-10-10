import { ProductAttribute } from "@/models/product/attributes";
import { Image } from "@/models/product/imageproduct";
import { ProductPrice } from "@/models/product/price";

export interface Product {
  id: string;
  name: string;
  description: string;
  type: string;
  slug: string;
  category: string;
  brand: string;
  images: Image[];
  attributes: ProductAttribute[];
  ratingReview: number;
  numberOfReview: number;
  price: ProductPrice;
  stock: number;
  refFournisseur: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductList {
  products: Product[];
}