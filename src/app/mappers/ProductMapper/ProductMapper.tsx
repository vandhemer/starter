import { CProduct, ProductAttributeType, Image, ProductPrice, ProductAttribute } from "@/models/cproduct";


export const ProductMapper = {

    // Transformer les données brutes des API en Product à utiliser coté Client

    populate(apiProduct: any) {

        let productItem = apiProduct[0];
    

        const product: CProduct =
        {
            id: productItem.code,
            name: productItem.name,
            description: productItem.short_description,
            type: 'ConfoProduct',
            price: this.populatePriceForproduct(productItem),
            category: productItem.stock,
            brand: productItem.brand,
            images: [this.populateImagesForproduct(productItem)],
            attributes: this.populateAttributesForproduct(productItem),
            numberOfReview: productItem.numberOfReview,
            slug: productItem.urlProduct,
            stock: productItem.availability,
            refFournisseur: productItem.refFournisseur ,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        return product;
    },
    populateAttributesForproduct(apiProduct: any) {
        let productAttribute: ProductAttribute;
        let productAttributes: ProductAttribute[] = [];

        apiProduct.essentialCharacteristics.forEach((essentialCharacter: any) => {
            productAttribute =
            {
                code: essentialCharacter.code,
                name: essentialCharacter.name,
                type: ProductAttributeType.ESSENTIAL,
                unit: "",
                value: essentialCharacter.featureValues[0].value
            }
            productAttributes.push(productAttribute)
        });

        return productAttributes;
    },

    populateImagesForproduct(apiProduct: any) {

        const image: Image =
        {
            url: apiProduct.primaryImages.zoom.url,
            format: undefined,
            imageType: "",
            altText: ""
        }

        return image;
    },

    populatePriceForproduct(apiProduct: any) {

        const productPrice: ProductPrice =
        {
            basicPrice: apiProduct.price.price,
            unitprice: 0,
            discountPrice: 0,
            currency: ""
        }

        return productPrice;

    }


}
