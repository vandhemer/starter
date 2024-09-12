export async function GET( request: Request, { params }: { params: { id: string } } ) {
  
  const res = await fetch('https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullbasicproducts?productsCodes=' + params.id, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return Response.json( await res.json() )
}