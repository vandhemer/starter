import useSWR from 'swr';
import { axiosClientFetcher } from '@/utils/http/client';

export function useFetcherClient(url: string) {
    const { data, error, isLoading } = useSWR(url, axiosClientFetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    });
    return {
        data: data,
        isLoading,
        isError: error
    }
}