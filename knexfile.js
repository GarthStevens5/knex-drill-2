module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g-memory-2'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}