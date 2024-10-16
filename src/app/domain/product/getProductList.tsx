import { ProductMapper } from "@/mappers/ProductMapper/ProductMapper";
import { Product } from "@/models/product/product";
import { fetchProductListById } from "@/services/product/ProductListService";
import { fetchProductById } from "@/services/product/ProductService";

export default async function getProductList() {
    
    let getProducts = await fetchProductListById();
    let productList: Product[] = [];

    for (let key in getProducts) {
        let productId = getProducts[key].code;
        let product = await fetchProductById(productId);
        productList.push(ProductMapper.populate(product[0]));
    }

    return productList;
    
}