import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class Client {
private readonly sapPrefix: string = "https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullbasicproducts?productsCodes=";
  axiosInstance: AxiosInstance;



get<T>(path: string /*, params = {}*/):Promise<T>
{
        return this._get<T>(path, this.sapPrefix/*, params*/);
}    

private async _get<T>(path: string, prefix = this.sapPrefix /*, params = {}*/) :Promise<T>{
    
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type":  "application/json",
      Accept: "application/json",
    },
  };


  this.axiosInstance = axios.create();

    console.log(path);
    const res =await this.axiosInstance.get<T>(path,config).then(({ data }) => data);
    console.log(res)
    
    return res;

  }

}
export default new Client();