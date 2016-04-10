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
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    }
});

module.exports = schema;
