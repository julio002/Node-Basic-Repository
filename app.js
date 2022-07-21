const express = require("express");

const customers = require("./CustomersController");
const actor = require("./Actor/ActorController");

const app = express();
const port = 4000;

app.use("/actor", actor);
app.use("/customers", customers);

app.get("/", (req, res) => {
  res.end("Hello Guys!");
});

app.listen(port, () => {
  console.log(`Este App está funcionando na porta ${port}`);
});
