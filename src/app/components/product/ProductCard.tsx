import { Product } from '@/models/product/product';
import { getDictionary } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Stars from '@/app/components/stars/Stars';

export default async function ProductCard(product: Product) {

    const dict = await getDictionary('fr');

    if(!product) {
        return <div>Loading ...</div>
    }

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={product.slug} prefetch={false}>
                <Image
                    src={product.images[0].url}
                    alt={product.name}
                    className="p-8 rounded-t-lg"
                    width="800"
                    height="600"
                    loading="lazy"
                />
            </Link>
            <div className="px-5 pb-5">
                <Link href={product.slug} prefetch={false}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name} <strong>{product.refFournisseur}</strong>
                    </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Stars rate={product.ratingReview} />
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                        {product.numberOfReview > 0 && `${product.numberOfReview} ${dict.products.reviews}`}
                    </span>
                </div>
                <div className="my-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price.basicPrice}€</span>
                </div>
                <Button>
                    {dict.products.cart}
                </Button>
            </div>
        </div>
    )
}
