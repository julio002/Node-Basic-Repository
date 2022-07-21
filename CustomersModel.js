const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    "postgres://postgres:julio002@localhost:5432/dvdrental",
    {
        define:{
            freezeTableName: true,
            timestamps: false,
        },
    }
);

const customer = sequelize.define("customer", {
    customer_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    store_id: {type: Sequelize.INTEGER},
    first_name: {type: Sequelize.STRING},
    last_name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    address_id: {type: Sequelize.STRING},
    activebool: {type: Sequelize.BOOLEAN},
    create_date: {type: Sequelize.DATE},
    last_update: {type: Sequelize.TIME},
    active: {type: Sequelize.INTEGER}
});

module.exports = customer;