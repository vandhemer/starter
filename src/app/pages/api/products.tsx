// pages/api/products/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../models/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 100,
    currency: 'USD',
    imageUrl: '/images/product1.jpg',
    stock: 10,
    category: 'Category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Ajoutez d'autres produits ici
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};