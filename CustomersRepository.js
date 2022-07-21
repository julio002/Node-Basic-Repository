const model = require('./CustomersModel');


exports.getAll = function () {
    return model.findAll();
};