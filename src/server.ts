import Fastify, { FastifyInstance } from 'fastify';

import app from '@/app';

const isProduction = process.env.NODE_ENV === 'production';

export const startServer = async (
  port: number,
  host: string,
): Promise<FastifyInstance> => {
  const server = Fastify({
    logger: {
      level: isProduction ? 'warn' : 'debug',
      transport: {
        target: '@fastify/one-line-logger',
      },
    },
  });

  // Register the app
  server.register(app);

  // Start the server
  await server.listen({ port: port, host: host });

  return server;
};
