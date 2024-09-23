export interface Price {
    price: string;
    oldPrice: string | null;
    ecoPartPrice: string;
    pourcentageReduction: string | null;
    discount: string | null;
    priceType: string | null;
    formattedPromotionEndDate: string | null;
    loyaltyPrice: string;
    loyaltyDiscountRate: string;
    loyaltyBackgroundColor: string;
    loyaltyTextColor: string;
}
  