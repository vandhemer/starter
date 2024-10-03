export interface Image {
    imageType?: string;
    format?: MediaFormat;
    url: string;
    altText: string;
}

export interface MediaFormat {
    width: number;
    height: number;
    absoluteUrl: string;
}