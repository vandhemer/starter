// services/productService.ts
import { ProductMapper } from '../mappers/ProductMapper';
import { Product } from '../models/product';
import client from '../utils/http/client';

export const fetchProductById = async (id: string): Promise<Product> => {
  getProductById(id);
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