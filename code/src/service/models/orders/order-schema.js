/**
 * This File defines the customer-request collection schema
 *
 * @return <Object> people schema
 */
var mongoose  = require('mongoose');


var schema = mongoose.Schema({
    description: {
        type: String
    },
    address: {
        type: String
    },
	companyId: {
        type: mongoose.Schema.Types.ObjectId
    },
	motorcycleId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = schema;
