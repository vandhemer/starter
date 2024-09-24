// models/Product.ts
export interface CProduct {
    id: string;
    name: string;
    description: string;
    type: string;
    slug: string;
    category: string;
    brand: string;
    images: Image[];
    attributes: ProductAttribute[];
    numberOfReview: number;
    price: ProductPrice;
    stock: number;
    /* TODO : to update */
    refFournisseur: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ProductPrice{
    basicPrice: number,
    unitprice: number,
    discountPrice:number,   
    currency: string;
  }
  
  export interface Image {
    imageType?: string;
    format?: MediaFormat; 
    url: string;
    altText: string;
  }
  
  export interface MediaFormat {
    width: number;
    height: number;
    absoluteUrl: string;
  }
   
  export interface ProductAttribute {
    code: string;
    name: string;
    type: ProductAttributeType;
    value: string;
    unit: string;
  }
  
  export enum ProductAttributeType {
    ESSENTIAL = "ESSENTIAL",
  }
  