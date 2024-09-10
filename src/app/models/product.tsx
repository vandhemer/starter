// models/Product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  stock: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}