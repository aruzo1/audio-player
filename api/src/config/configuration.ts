export default () => ({
  port: parseInt(process.env.PORT, 10),
  mediaUrl: process.env.MEDIA_URL,
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
});
