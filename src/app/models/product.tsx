// models/Product.ts
export interface Product {
  id: string;
  code: string;
  name: string;
  isDisplayable: boolean;
  paymentFullCB: number;
  isMp: boolean;
  brand: string | null;
  family: number;
  role: string;
  variantLabel: string;
  productNote: string;
  numberOfReviews: number;
  availability: string;
  numberOfStoresHavingStock: number;
  addToCartDirect: boolean;
  refFournisseur: string;
  urlProduct: string;
}

// models/Category.ts
export interface Category {
  breadcrumbStructure: string[];
  universe: string;
  market: string;
  segment: string;
}

// models/Price.ts
export interface Price {
  current: string;
  old: string | null;
  ecoPartPrice: string;
  percentageReduction: string | null;
}

// models/LoyaltyPrice.ts
export interface LoyaltyPrice {
  price: string;
  discountRate: string;
  backgroundColor: string;
  textColor: string;
}

// models/Delivery.ts
export interface Delivery {
  type: string;
  delay: {
    value: string;
    unit: string;
  };
  price: string;
}

// models/Flyer.ts
export interface Flyer {
  backgroundColour: string;
  textColor: string;
  nom: string;
  code: string;
}

// models/Image.ts
export interface Image {
  thumbnail: string;
  product: string;
  zoom: string;
}

export interface ProductImages {
  primary: Image;
  ambiance: Image;
}

// models/Characteristic.ts
export interface Characteristic {
  name: string;
  values: string[];
  group: string;
}

// models/ProductDetails.ts
export interface ProductDetails {
  product: Product;
  category: Category;
  price: Price;
  loyaltyPrice: LoyaltyPrice;
  delivery: Delivery;
  flyers: Flyer[];
  images: ProductImages;
  characteristics: Characteristic[];
}