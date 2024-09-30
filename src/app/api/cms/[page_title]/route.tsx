import { fetchEntryByTitle } from '@/services/cms/getEntryService';

export async function GET(request: Request, { params }: { params: { page_title: string } }) {
  const page = await fetchEntryByTitle(params.page_title);
  return new Response(JSON.stringify(page), {
    headers: { 'Content-Type': 'application/json' },
  });
}