import { ProductMapper } from '@/app/mappers/ProductMapper/ProductMapper';
import { fetchProductById } from '@/services/product/ProductService';

export const fetchCache = 'default-no-store';

export async function GET( request: Request, { params }: { params: { id: string } } ) {

  const product  = await fetchProductById(params.id);
  const cproduct = ProductMapper.populate(product[0]);
  
  return new Response(JSON.stringify(cproduct), {
    headers: { 'Content-Type': 'application/json' },
  });

}