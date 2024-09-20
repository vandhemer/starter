// services/productService.ts
import { Product } from '@/models/product/product';

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch('https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  
  return await res.json();
};