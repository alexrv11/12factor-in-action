/**
 * This File defines the customer-request collection schema
 *
 * @return <Object> company schema
 */
var mongoose  = require('mongoose');

var position = {
	latitude: { type: String },
	longitude: { type: String }
};

var schema = mongoose.Schema({
    name: {
        type: String
    },
    position: position,
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    }
});

module.exports = schema;
