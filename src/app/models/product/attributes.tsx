export interface ProductAttribute {
    code: string;
    name: string;
    type: ProductAttributeType;
    value: string;
    unit: string;
}

export enum ProductAttributeType {
    ESSENTIAL = "ESSENTIAL",
}