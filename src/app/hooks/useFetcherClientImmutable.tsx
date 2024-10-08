import useSWR from 'swr';
import { axiosClientFetcher } from '@/utils/http/client';

export function useFetcherClientImmutable(url: string) {
    const { data, error, isLoading } = useSWR(url, axiosClientFetcher, {
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