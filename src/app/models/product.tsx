// models/Product.ts
export interface Product {
  refFournisseur: string;
  essentialCharacteristics: any;
  primaryImages: any;
  numberOfReview: number;
  urlPicture: string | undefined;
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