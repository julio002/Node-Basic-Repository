const express = require("express");
const bodyParser = require("body-parser");

const pokemon = require("./Pokemon/PokemonController");

const app = express();
const port = 4000;

// Adicione o middleware bodyParser para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

app.use("/pokemon", pokemon);

app.listen(port, () => {
  console.log(`Este App está funcionando na porta ${port}`);
});
