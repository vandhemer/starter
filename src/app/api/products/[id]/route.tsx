import { ProductMapper } from "@/app/mappers/ProductMapper/ProductMapper";
import { CProduct } from "@/app/models/cproduct";
import { getProductById } from "@/services/product/ProductService";

export const fetchCache = 'default-no-store';

export async function GET( request: Request, { params }: { params: { id: string } } ) {
  const product  = await getProductById(params.id);
  const cproduct = ProductMapper.populate(product);
  return new Response(JSON.stringify(cproduct), {
    headers: { 'Content-Type': 'application/json' },
  });
}