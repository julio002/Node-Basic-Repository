const repository = require('./CustomersRepository')

exports.getAll = function() {
    return repository.getAll()
};