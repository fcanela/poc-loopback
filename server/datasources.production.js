const config = {
  host: process.env.POSTGRESQL_HOST,
  port: parseInt(process.env.POSTGRESQL_PORT),
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
  min: 0,
  max: 5,
  name: "postgresql",
  connector: "postgresql"
};

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('using configuration', config);

module.exports = {
  db: {
    name: "db",
    connector: "postgresql"
  },
  postgresql: config
};
