import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.PRODUCT_API_URL
  ? process.env
  : publicRuntimeConfig;

export const customHostProductBaseUrl = envConfig.PRODUCT_API_URL as string;