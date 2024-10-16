import getProductList from "@/app/domain/product/getProductList";

export const fetchCache = 'default-no-store';
export const dynamic = "force-dynamic";

export async function GET(request: Request) {

    return new Response(JSON.stringify(await getProductList()), {
        headers: { 'Content-Type': 'application/json' },
    });

}