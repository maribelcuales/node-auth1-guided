require("dotenv").config();

// const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

const parse = require('pg-connection-string').parse;

const configConnection = parse('postgres://postgres:secretpassword@localhost:5433/auth');

const pgConnection = process.env.DATABASE_URL ||  configConnection;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    // connection: {
    //   database: 'auth',
    //   user: 'postgres',
    //   password: 'secretpassword',
    //   port: 5433
    // },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
