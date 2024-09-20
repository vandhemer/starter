// services/productService.ts
import { Product } from '@/models/product/product';

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(process.env.PRODUCT_API_URL + '/products/v1/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Gravitee-Api-Key': process.env.GRAVITEE_API_KEY,
    },
  })
  
  return await res.json();
};