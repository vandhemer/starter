import { fetchProductById } from "../../../services/getProductService";

export const fetchCache = 'default-no-store';

export async function GET( request: Request, { params }: { params: { id: string } } ) {
  
  return fetchProductById(params.id);
  
}