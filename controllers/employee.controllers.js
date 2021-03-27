const knex = require("../config/knex");
const query = (first_name, last_name, email, company) =>
  knex("employees").where((builder) => {
    if (first_name) {
      builder.where("first_name", "ilike", `%${first_name}%`);
    }
    if (last_name) {
      builder.where("last_name", "ilike", `%${last_name}%`);
    }
    if (email) {
      builder.where("email", "ilike", `%${email}%`);
    }
    if (company) {
      builder.where("company", "ilike", `%${company}%`);
    }
  });
const getEmployees = async (req, res) => {
  try {
    const { first_name, last_name, email, company, offset } = req.query;
    const limit = req.query.limit <= 50 ? parseInt(req.query.limit) : 50;
    const total = await query(first_name, last_name, email, company)
      .count("*")
      .first();
    const result = await query(first_name, last_name, email, company)
      .limit(limit)
      .offset(offset);

    res
      .status(200)
      .send({ data: { total: total["count"], employees: result } });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};

module.exports = { getEmployees };
