import { fetchProductById } from "../../../services/productService";

export async function GET( request: Request, { params }: { params: { id: string } } ) {
  fetchProductById(params.id);
}