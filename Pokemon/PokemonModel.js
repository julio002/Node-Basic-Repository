const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:julio002@localhost:5432/pokemon",
  {
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

const pokemon = sequelize.define("pokemon", {
  pokemon_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING },
  type: { type: Sequelize.STRING },
  image_url: { type: Sequelize.STRING },
  evolucion: { type: Sequelize.STRING, allowNull: true },
});

module.exports = pokemon;
