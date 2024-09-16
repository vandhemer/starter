import { fetchProductById } from "../../../services/productService";

export async function GET( request: Request, { params }: { params: { id: string } } ) {
  
  return fetchProductById(params.id);
  
}