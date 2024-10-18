import { fetchHeaderRes } from '@/services/cms/getEntryService';

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    const page = await fetchHeaderRes();
    return new Response(JSON.stringify(page), {
        headers: { 'Content-Type': 'application/json' },
    });
}