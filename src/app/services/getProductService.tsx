// services/productService.ts
import { Product } from '@/models/product/product';
import client from '../utils/http/client';
import { ProductMapper } from '../mappers/ProductMapper';

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch('https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  
  return Response.json(await res.json());
};




export const getProductById = async (id: string) : Promise<Product> =>{
  

  const data = await client.get<Product>('https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id);
  
  const product= ProductMapper.populate(data);
  console.log('mappertest');
  console.log(product);

  return data;
};