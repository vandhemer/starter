import { ProductMapper } from "@/mappers/ProductMapper/ProductMapper";
import { fetchProductById } from "@/services/product/ProductService";

export async function getProduct(id: string) {
    
    const product  = await fetchProductById(id);
    return ProductMapper.populate(product[0]);
    
}