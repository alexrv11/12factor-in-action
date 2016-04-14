/**
 * This File defines the customer-request collection schema
 *
 * @return <Object> employee schema
 */
var mongoose  = require('mongoose');


var schema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
    	type: String
    },
    phone: {
    	type: String
    },
    type: {
    	type: String
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    }
});

module.exports = schema;
