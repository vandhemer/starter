import { ProductMapper } from '@/mappers/ProductMapper/ProductMapper';
import { fetchProductListById } from '@/services/product/ProductListService';
import { Product } from '@/models/product/product';
import { fetchProductById } from '@/services/product/ProductService';

export const fetchCache = 'default-no-store';
export const dynamic = "force-dynamic";

export async function GET(request: Request) {

    try {

        let getProducts = await fetchProductListById();
        let productList: Product[] = [];

        for (let key in getProducts) {
            let productId = getProducts[key].code;
            let product = await fetchProductById(productId);
            productList.push(ProductMapper.populate(product[0]));
        }

        return new Response(JSON.stringify(productList), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: any) {
        console.error(error.message);
    }
}