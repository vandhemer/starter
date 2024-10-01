import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
export class Client {
  
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = Axios.create();
  }
  
  get<T>(path: string): Promise<T> {
    return this._get<T>(path);
  }

  private async _get<T>(path: string): Promise<T> {

    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    };

    if (config.headers && process.env.GRAVITEE_API_KEY) {
      config.headers["X-Gravitee-Api-Key"] = process.env.GRAVITEE_API_KEY;
    }

    const res = await this.axiosInstance.get<T>(path, config).then(({ data }: any) => data);

    return res;

  }
}

export const client = new Client();

export const fetcher = (url: string) => Axios(
  {
    method: 'get',
    url: url,
    headers: {
      'X-Gravitee-Api-Key': process.env.GRAVITEE_API_KEY
    }
  }
  ).then(function(res) {
    return res.data;
})