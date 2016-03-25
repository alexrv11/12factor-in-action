/**
 * This File exports the folder as customer-request module
 *
 * @return <Object>
 */
var mongoose = require('mongoose');
var schema = require('./order-schema');

var modelName = 'orders';
var model = mongoose.model(modelName, schema);


module.exports = {
    modelName: modelName,
    model: model
};
