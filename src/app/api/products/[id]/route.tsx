import { fetchProductById } from "../../../services/getProductService";

export const fetchCache = 'default-no-store';

export async function GET( request: Request, { params }: { params: { id: string } } ) {
  const page = await fetchProductById(params.id);
  return new Response(JSON.stringify(page), {
    headers: { 'Content-Type': 'application/json' },
  });
}