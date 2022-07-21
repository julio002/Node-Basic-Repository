const repository = require('./ActorRepository')

exports.getAll = function() {
    return repository.getAll()
};