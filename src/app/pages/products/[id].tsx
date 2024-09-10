import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '../../models/product';
import { fetchProductById, fetchProducts } from '../../services/productService';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price} {product.currency}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string;
  const product = await fetchProductById(productId);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;