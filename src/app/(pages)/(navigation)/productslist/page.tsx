import { Product } from '@/models/product/product';
import ProductCard from '@/app/components/product/ProductCard';
import { Suspense } from 'react';
import PageLoading from '@/app/components/skeletons/PageLoading';
import { clientFetcher } from '@/utils/http/fetch';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {

    return {
        title: 'product.name',
        description: 'product.name',
    }
}

export default async function ProductListPage() {

    let productslist: any | undefined;
    productslist = await clientFetcher('/api/v1/products/list');

    return (
        <Suspense fallback={<PageLoading />}>
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-4">
                {productslist?.map((product: Product) => (                    
                    <ProductCard key={product.id} {...product} />
                ))}

            </div>
        </Suspense>
    )
}