// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function createApp() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin', 'X-Requested-With', 'Content-Type',
      'Accept', 'Authorization', 'X-HTTP-Method-Override',
    ],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );
  await app.init();
  return app;
}

// Local development
async function bootstrap() {
  const app = await createApp();
  await app.listen(process.env.PORT ?? 3000);
}

// Vercel serverless handler
let cachedApp: any;

module.exports = async (req: any, res: any) => {
  if (!cachedApp) {
    cachedApp = await createApp();
  }
  const instance = cachedApp.getHttpAdapter().getInstance();
  instance(req, res);
};

if (require.main === module) {
  bootstrap();
}