// services/productService.ts
import { Product } from '../models/product';

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch('http://localhost:3000/api/products/' + id, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  
  return Response.json(await res.json())
};

