import db from '@/db';
import { productTable } from '@/db/schema';
import { replyApiResponse } from '@/utils';
import { eq } from 'drizzle-orm';
import { FastifyReply, FastifyRequest } from 'fastify';

export const getProducts = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  try {
    const products = await db
      .select()
      .from(productTable)
      .orderBy(productTable.id);

    console.log({ products });

    replyApiResponse(reply, 'success', 200, products, null);
  } catch (error) {
    console.error(error);
    replyApiResponse(reply, 'error', 500, null, 'Internal Server Errror');
  }
};

export const getProductById = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  try {
    const { id } = request.params as { id: string };
    const [product] = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(id)));

    if (!product) {
      return replyApiResponse(
        reply,
        'error',
        404,
        null,
        'Product Not Found!',
      );
    }

    replyApiResponse(reply, 'success', 200, product, null);
  } catch (error) {
    console.error(error);
    replyApiResponse(reply, 'error', 500, null, 'Internal Server Errror');
  }
};

export const createProduct = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  try {
    const { name } = request.body as { name: string };
    const [product] = await db
      .insert(productTable)
      .values({ name })
      .returning();

    replyApiResponse(
      reply,
      'success',
      201,
      product,
      'Product Created Successfully!',
    );
  } catch (error) {
    console.error(error);
    replyApiResponse(reply, 'error', 500, null, 'Internal Server Errror');
  }
};

export const updateProduct = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  try {
    const { id } = request.params as { id: string };
    const { name } = request.body as { name: string };
    const [product] = await db
      .update(productTable)
      .set({ name })
      .where(eq(productTable.id, Number(id)))
      .returning();

    replyApiResponse(
      reply,
      'success',
      200,
      product,
      'Product Updated Successfully!',
    );
  } catch (error) {
    console.error(error);
    replyApiResponse(reply, 'error', 500, null, 'Internal Server Errror');
  }
};

export const deleteProduct = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  try {
    const { id } = request.params as { id: string };
    const [product] = await db
      .delete(productTable)
      .where(eq(productTable.id, Number(id)))
      .returning();

    replyApiResponse(
      reply,
      'success',
      200,
      product,
      'Product Deleted Successfully!',
    );
  } catch (error) {
    console.error(error);
    replyApiResponse(reply, 'error', 500, null, 'Internal Server Errror');
  }
};
