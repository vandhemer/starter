import { getProduct } from "@/app/domain/product/getProduct";

export const fetchCache = 'default-no-store';

export async function GET(request: Request, { params }: { params: { id: string } }) {

    return new Response(JSON.stringify(await getProduct(params?.id)), {
        headers: { 'Content-Type': 'application/json' },
    });

}