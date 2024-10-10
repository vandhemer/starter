'use server'

import { Product, ProductList } from '@/models/product/product';
import ProductCard from '@/app/components/product/ProductCard';
import { Suspense } from 'react';
import PageLoading from '@/app/components/skeletons/PageLoading';

async function getProductsList() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/products/list', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 120
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error: any) {
        console.error(error.message);
    }
}

export async function generateMetadata() {

    return {
        title: 'product.name',
        description: 'product.name',
    }
}

export default async function ProductListPage() {

    let productslist: any | undefined;
    productslist = await getProductsList();

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