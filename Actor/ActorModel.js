const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    "postgres://postgres:lorena25@localhost:5432/dvdrental",
    {
        define:{
            freezeTableName: true,
            timestamps: false,
        },
    }
);

const actor = sequelize.define("actor", {
    actor_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: Sequelize.STRING},
    last_name: {type: Sequelize.STRING},
    
});

module.exports = actor;