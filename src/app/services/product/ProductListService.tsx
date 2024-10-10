import { axiosServerFetcher } from "@/utils/http/server";

export const fetchProductListById = async (): Promise<any> => {
    const data = await axiosServerFetcher('https://run.mocky.io/v3/1c5450ab-68db-4202-a218-b5b06afa850d');
    return data;
};