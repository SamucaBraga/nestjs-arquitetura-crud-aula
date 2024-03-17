import { PrismaClientError } from 'src/errors/prisma-client-error';

export const isPrismaError = (e: PrismaClientError): boolean => {
  return (
    typeof e.code === 'string' &&
    typeof e.clientVersion === 'string' &&
    (typeof e.meta === 'undefined' ||
      (typeof e.meta === 'object' &&
        (typeof e.meta.target === 'string' ||
          (Array.isArray(e.meta.target) &&
            e.meta.target.every((item) => typeof item === 'string')))))
  );
};
