import { customHostProductBaseUrl } from "@/utils/config/baseUrlProduct";
import { axiosServerFetcher } from "@/utils/http/server";


export const fetchProductById = async (id: string): Promise<any> => {

  const data = await axiosServerFetcher(process.env.PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id);
  return data;
  
};