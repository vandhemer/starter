import { axiosServerFetcher } from "@/utils/http/server";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.PRODUCT_API_URL ? process.env : publicRuntimeConfig;
const { PRODUCT_API_URL } = envConfig;

export const fetchProductById = async (id: string): Promise<any> => {
  const data = await axiosServerFetcher(PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=' + id);
  return data;
};