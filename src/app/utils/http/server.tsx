import Axios from 'axios';

/**
 * Clientside fetch client
 * @param url 
 * @returns data
 */

export const axiosServerFetcher = (url: string) => Axios(
  {
    method: 'get',
    url: url,
    headers: {
        "X-Gravitee-Api-Key": process.env.GRAVITEE_API_KEY
    }
  }
  ).then(function(res) {
    return res.data;
})