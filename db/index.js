const { Pool } = require("pg");
require("dotenv").config();

const pool = (() => {
  if (process.env.NODE_ENV !== "production") {
    return new Pool({
      ssl: false,
    });
  } else {
    return new Pool({
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
