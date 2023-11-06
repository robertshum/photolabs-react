const pg = require("pg");

// PG database client/connection setup
require('dotenv').config();

const client = new pg.Client({
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client.connect();

module.exports = client;
