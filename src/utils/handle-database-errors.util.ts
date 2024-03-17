import { DatabaseError } from 'src/errors/database-error';
import { PrismaClientError } from 'src/errors/prisma-client-error';
import { UniqueConstraintError } from 'src/errors/unique-constraint-error';
import { PrismaErrors } from 'src/prisma/prisma.errors';

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};
