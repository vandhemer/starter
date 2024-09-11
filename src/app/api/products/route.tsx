export async function GET() {
  const res = await fetch('https://cloud-api.conforama.fr/occ/v2/conforama/products/UEFSSVMgTkFUSU9O/fullbasicproducts?productsCodes=749450,792118,792117,788233,712796,748341,766613,733411,789912,783911', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json();
 
  return Response.json({ data })
}