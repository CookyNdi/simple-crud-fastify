import { FastifyReply } from 'fastify';

type ApiResponse<T> = {
  status: 'success' | 'error';
  code: number;
  data: T | null;
  message: string | null;
  errors?: { field: string | number; message: string }[] | null;
};

export const replyApiResponse = <T>(
  reply: FastifyReply,
  status: 'success' | 'error',
  code: number,
  data: T | null,
  message: string | null,
  errors?: { field: string | number; message: string }[] | null,
): void => {
  const apiResponse: ApiResponse<T> = {
    status,
    code,
    data,
    message,
    errors,
  };

  reply.status(code).send(apiResponse);
};
