/**
 * This File defines the customer-request collection schema
 *
 * @return <Object> product schema
 */
var mongoose  = require('mongoose');


var schema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
    	type: String
    },
    code: {
    	type: String
    },
    image: {
    	type: String
    },
    price: {
        type: Number
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    }
});

module.exports = schema;
