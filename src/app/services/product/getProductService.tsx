// services/productService.ts
import { Product } from '@/models/product/product';

export const fetchProductById = async (id: string): Promise<Product> => {

  const headers: HeadersInit = {
    accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (process.env.GRAVITEE_API_KEY) {
    headers['X-Gravitee-Api-Key'] = process.env.GRAVITEE_API_KEY;
  }

  const res = await fetch(process.env.PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id, {
    headers,
  });
  
  return await res.json();
};