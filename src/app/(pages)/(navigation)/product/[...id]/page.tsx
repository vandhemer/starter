'use server'
import { Product } from '@/app/models/product/product';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { permanentRedirect, RedirectType } from 'next/navigation';
import { UrlBuilder } from '@/app/utils/UrlBuilder';
import { Suspense } from 'react';
import PageLoading from '@/skeletons/PageLoading';
import Image from 'next/image';
import Button from '@/components/Button';
import Stars from '@/app/components/Stars';
import { getProduct } from '@/app/domain/product/getProduct';

export async function generateMetadata({ params }: { params: { id: string[] } }) {

    const productId = params?.id;
    let product: Product | undefined;

    product = await getProduct(productId[productId.length - 1]);

    if (!product) {
        throw new Error(`Produit indisponible`);
    }

    return {
        title: product.name,
        description: product.name,
        openGraph: {
            url: product.slug,
            type: "website",
            title: product.name,
            description:
                product.name,
            images: [
                {
                    url: product.images[0].url,
                    width: 1200,
                    height: 630,
                    alt: product.name
                }
            ]
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
              index: true,
              follow: false,
              noimageindex: true,
              'max-video-preview': -1,
              'max-image-preview': 'large',
              'max-snippet': -1,
            },
        },
    }
}

export default async function ProductDetailPage({ params }: { params: { id: string[] } }) {

    const dict = await getDictionary('fr');

    const productId = params?.id;
    const lastProductIdPath = productId.length - 1;

    let product: Product | undefined;

    product = await getProduct(productId[productId.length - 1]);

    if (!product) {
        throw new Error(`Produit indisponible`);
    }

    /** 
     * Redirect to product slug in case of hiting the page with /product/{...id}
     */

    if (product.slug !== '/' + productId.slice(0, -1).join('/') + /p/ + productId[lastProductIdPath]) {
        const newUrl = UrlBuilder.buildProductUrl(product.slug, productId[lastProductIdPath]);
        permanentRedirect(newUrl, RedirectType.replace);
    }

    return (
        <Suspense fallback={<PageLoading />}>
            <section className="relative py-6">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                        <div className="img">
                            <div className="img-box h-full max-lg:mx-auto">
                                <Image
                                    src={product.images[0].url}
                                    alt={product.name}
                                    className="max-lg:mx-auto lg:ml-auto h-full object-fit"
                                    width="800"
                                    height="600"
                                    loading="lazy"
                                />  
                            </div>
                        </div>
                        <div className="data w-full lg:pr-8 pr-0 justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                            <div className="data w-full max-w-xl">
                                <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-2">
                                    {product.name} <strong>{product.refFournisseur}</strong>
                                </h2>
                                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                    <h6 className="font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                        {product.price.basicPrice}€
                                    </h6>
                                    <div className="flex items-center gap-2">
                                        <Stars rate={product.ratingReview} />
                                        <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                                            {product.numberOfReview && `${product.numberOfReview} ${dict.products.reviews}`}
                                        </span>
                                    </div>
                                </div>
                                <ul className="grid gap-y-4 mb-8">
                                    {product.attributes.map((carac, index) => (
                                        <li key={`${product?.id}-${index}`} className="flex items-center gap-3">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="26" height="26" rx="13" fill="#000" />
                                                <path
                                                    d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <span className="font-normal text-base text-gray-900">
                                                {carac.name} : {carac.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-3 py-8">
                                    <button className="group transition-all duration-500 p-4 rounded-full bg-red-50 hover:bg-red-100 hover:shadow-sm hover:shadow-red-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <path
                                                d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                                                stroke="#000"
                                                strokeWidth="1.6"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <Button>
                                       {dict.products.cart}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>
    );
}