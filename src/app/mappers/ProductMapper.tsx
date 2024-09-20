import { CProduct } from "../models/cproduct";
import { Product } from "../models/product";

export const ProductMapper = {

    // Transformer les donéées brutes des API en Product à utiliser coté Client

    populate( apiProduct) {

console.log ('in populate *******************')
console.log(apiProduct)


        const product : CProduct =
        {
            id: apiProduct[0].code,
            name: apiProduct[0].name,
            description: apiProduct[0].short_description,
            type: 'ConfoProduct',
            price: apiProduct[0].price,
            category: apiProduct[0].stock,
            brand: apiProduct[0].brand,
            images: [],
            attributes: [],
            numberOfReview: 0,
            slug: apiProduct[0].urlProduct,
            stock: apiProduct[0].availability
        }

        return product;

}

}

