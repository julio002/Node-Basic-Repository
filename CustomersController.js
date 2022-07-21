const express = require("express");

const router = express.Router();

const service = require("./CustomersService");

router.get("/", (req, res) => {
  service.getAll().then((customer) => {
    res.send(customer);
  });
});
router.post("/", (req, res) => {
  res.send("Estou criando um costummer");
});
router.put("/", (req, res) => {
  res.send("Estou alterando um costummer");
});
router.delete("/", (req, res) => {
  res.send("Estou apagando um costummer");
});

module.exports = router;
