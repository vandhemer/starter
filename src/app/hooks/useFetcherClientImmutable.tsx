import useSWR from 'swr';
import { axiosFetcher } from '@/utils/http/client';

export function useFetcherClientImmutable(url: string) {
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