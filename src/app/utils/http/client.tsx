import Axios from 'axios';

/**
 * Clientside fetch client
 * @param url 
 * @returns data
 */

export const axiosFetcher = (url: string) => Axios(
  {
    method: 'get',
    url: url,
  }
  ).then(function(res) {
    return res.data;
})