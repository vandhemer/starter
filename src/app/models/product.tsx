export interface Image {
  imageType: string | null;
  format: string | null;
  url: string;
  altText: string;
  galleryIndex: number | null;
}

export interface ClassificationGroup {
  code: string;
  nom: string;
  position: number;
}

export interface FeatureValue {
  value: string;
  picto: string | null;
  pictos: string | null;
}

export interface EssentialCharacteristic {
  code: string;
  name: string;
  description: string | null;
  type: string | null;
  range: boolean;
  comparable: boolean;
  featureUnit: string | null;
  featureValues: FeatureValue[];
  classificationGroup: ClassificationGroup;
  position: number;
  visibility: string;
  csClass: string;
  displayMode: string;
  displayInGraduationScale: boolean;
  associatedFeature: string | null;
}

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

export interface MadData {
  typeKey: string;
  isMagNaDrive: boolean;
  option: string | null;
  delayValue: string;
  delayUnitKey: string;
  pickupIsUnavailable: boolean;
  priceValue: string | null;
  storeName: string | null;
  deliveryTimeEarliestDate: string | null;
  deliveryTimeLatestDate: string | null;
  isMpDeliveryStatus: boolean;
  minimumDelay: string | null;
  isForfait: boolean;
  mpAvailability: string | null;
  flyer: string | null;
}

export interface PriorityPushOp {
  pushOp: string | null;
  url: string;
}

export interface Flyer {
  backgroundColour: string;
  textColour: string;
  stroke: string | null;
  nom: string;
  code: string;
}

export interface Product {
  pk: string;
  code: string;
  name: string;
  offerCode: string | null;
  estAffichable: boolean;
  paymentFullCB: number;
  isMp: boolean;
  breadcrumbStructure: string[];
  univers: string;
  marche: string;
  segment: string;
  brand: string | null;
  family: number;
  role: string;
  variantLabel: string;
  productNote: string;
  numberOfReview: number;
  offerState: string | null;
  offerGrade: string | null;
  offers: any | null;
  offer: any | null;
  deliveryStatus: string | null;
  calculatedName: string | null;
  availability: string;
  numberOfStoresHavingStock: number;
  offerNumber: number;
  addToCartDirect: boolean;
  pushOpStock: string | null;
  price: Price;
  vendor: string | null;
  retraitMadsData: MadData[];
  deliveryMadData: MadData;
  fastDeliveryMadData: MadData | null;
  priorityPushOp: PriorityPushOp;
  refFournisseur: string;
  flyers: Flyer[];
  offerToShow: string | null;
  promoCode: string;
  nameNormalized: string;
  calculatedLabelNormalized: string;
  urlPicture: string;
  urlProduct: string;
  primaryImages: { [key: string]: Image };
  ambianceImages: { [key: string]: Image };
  essentialCharacteristics: EssentialCharacteristic[];
  repairabilityIndex: string | null;
  energyClassData: any | null;
}