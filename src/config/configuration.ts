export default () => ({
  port: parseInt(process.env.PORT) || 4000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
  },
});
