const express = require("express");
const app = express();
const port = 3400;

const initRoutes = require("./routes/routes");
initRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
