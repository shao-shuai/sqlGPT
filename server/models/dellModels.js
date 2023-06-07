const { Pool } = require('pg');

const PG_URI = 'postgres://codesmith:12345678@192.168.1.197:5432/cpdesmith';

/* create a new pool using the connection URI */
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  },
};
