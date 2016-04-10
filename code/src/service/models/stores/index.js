/**
 * This File exports the folder as company module
 *
 * @return <Object>
 */
var mongoose = require('mongoose');
var schema = require('./store-schema');

var modelName = 'stores';
var model = mongoose.model(modelName, schema);


module.exports = {
    modelName: modelName,
    model: model
};
