var mongoose = require('mongoose');
var schema = require('./stand-schema');

var modelName = 'stands';
var model = mongoose.model(modelName, schema);


module.exports = {
    modelName: modelName,
    model: model
};