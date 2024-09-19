import { FeatureValue } from "@/models/product/featureValue";
import { ClassificationGroup } from "@/models/product/classificationgroup";

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
  