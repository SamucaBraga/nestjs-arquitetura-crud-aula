import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NotFoundInterceptor } from './interceptors/entity-not-found.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { DatabaseInterceptor } from './interceptors/database.interceptor';
import { ConflictInterceptor } from './interceptors/conflict.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('auth')
    .addTag('post')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Interceptor
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());

  await app.listen(3000);
}
bootstrap();
