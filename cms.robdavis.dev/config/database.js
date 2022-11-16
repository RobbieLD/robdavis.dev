module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', ''),
      port: env.int('DATABASE_PORT', 0),
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl: false,
    },
    debug: false,
  },
});
