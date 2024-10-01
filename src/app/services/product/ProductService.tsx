// services/productService.ts
import { getFetcherServer } from '@/app/utils/http/server';

export const fetchProductById = async (id: string): Promise<any> => {
  const data = await getFetcherServer.get<any>(process.env.PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id);
  return data;
};