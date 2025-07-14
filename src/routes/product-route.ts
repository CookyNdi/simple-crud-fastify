import { FastifyInstance } from 'fastify';

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '@/controllers/product-controller';

const productRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', getProducts);
  fastify.get('/id/:id', getProductById);
  fastify.post('/', createProduct);
  fastify.patch('/:id', updateProduct);
  fastify.delete('/:id', deleteProduct);
};

export default productRoute;
