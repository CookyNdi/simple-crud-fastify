import 'dotenv/config';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';

import { replyApiResponse } from './utils';

import productRoute from './routes/product-route';

const app = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
): Promise<void> => {
  // Register other plugins, if any
  await fastify.register(fastifyCors, {
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:4173',
    ],
    credentials: true,
  });
  await fastify.register(fastifyHelmet);

  // Register routes

  // fastify.register(productRoutes, { prefix: '/products' });

  await fastify.register(productRoute, { prefix: '/api/products' });

  // Add hooks, if necessary
  // fastify.addHook('onRequest', async (request, reply) => {
  //   // Do something before each request
  // });

  fastify.get('/', (request, reply) => {
    replyApiResponse(reply, 'success', 200, null, 'Wellcome To Your API');
  });

  // Set error handler
  fastify.setErrorHandler((error, request, reply) => {
    console.log(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  });
};

export default app;
