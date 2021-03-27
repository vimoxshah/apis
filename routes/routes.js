const express = require("express");
const Router = express.Router;

const router = new Router();
const employeeController = require("../controllers/employee.controllers");

let routes = (app) => {
  router.get("/employees", employeeController.getEmployees);

  app.use("/api", router);
};

module.exports = routes;
