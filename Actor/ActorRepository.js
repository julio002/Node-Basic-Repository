const model = require('./ActorModel');


exports.getAll = function () {
    return model.findAll();
};