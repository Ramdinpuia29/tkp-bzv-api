import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 4000,
  url: process.env.URL || 'localhost',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
