/**
 * This File exports the folder as customer-request module
 *
 * @return <Object>
 */
var mongoose = require('mongoose');
var schema = require('./customer-request-schema');

var modelName = 'customerRequests';
var model = mongoose.model(modelName, schema);


module.exports = {
    modelName: modelName,
    model: model
};
