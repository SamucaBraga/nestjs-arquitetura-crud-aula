import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { ConflictError } from 'src/errors/conflict-error';

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ConflictError) {
          console.log(error, 'ConflictError');
          throw new ConflictException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
