import Axios from 'axios';
import useSWR from 'swr';

/**
 * Clientside fetch client
 * @param url 
 * @returns data
 */

const axiosFetcher = (url: string) => Axios(
  {
    method: 'get',
    url: url,
  }
  ).then(function(res) {
    return res.data;
})

export function useFetcherClient (url: string) {
  const { data, error, isLoading } = useSWR(url, axiosFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {
      data: data,
      isLoading,
      isError: error
  }
}