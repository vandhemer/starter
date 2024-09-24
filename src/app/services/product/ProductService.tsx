// services/productService.ts
import client from '@/utils/http/client';


export const getProductById = async (id: string): Promise<any> => {
  const data = await client.get<any>(process.env.PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id);
  
  return data;
};