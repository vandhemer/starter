import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class Client {
  private readonly sapPrefix: string = "https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullbasicproducts?productsCodes=";
  axiosInstance!: AxiosInstance;
  get<T>(path: string /*, params = {}*/): Promise<T> {
    return this._get<T>(path, this.sapPrefix/*, params*/);
  }

  private async _get<T>(path: string, prefix = this.sapPrefix /*, params = {}*/): Promise<T> {

    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    };

    if (process.env.GRAVITEE_API_KEY) {
      config.headers["X-Gravitee-Api-Key"] = process.env.GRAVITEE_API_KEY;
    }


    // if () {
    //   headers['X-Gravitee-Api-Key'] = process.env.GRAVITEE_API_KEY;
    // }

    this.axiosInstance = Axios.create();

    const res = await this.axiosInstance.get<T>(path, config).then(({ data }) => data);
    return res;

  }

}
export default new Client();