/**
 * This File exports the folder as user module
 *
 * @return <Object>
 */
var mongoose = require('mongoose');
var schema = require('./user-schema');

var modelName = 'users';
var model = mongoose.model(modelName, schema);

module.exports = {
    modelName: modelName,
    model: model
};
