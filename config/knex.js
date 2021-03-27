const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "vimoxshah",
    password: "",
    database: "company",
  },
});

module.exports = knex;
