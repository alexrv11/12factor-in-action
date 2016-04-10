/**
 * This File defines the customer-request collection schema
 *
 * @return <Object> user schema
 */
var mongoose  = require('mongoose');


var schema = mongoose.Schema({
    name: {
        type: String
    },
    login: {
        type: String,
        unique : true,
        required : true
    },
	password: {
        type: String
    },
    email: {
        type: String
    },
    token: {
        type: String
    },
    type: {
        type: String
    },
    state: {
        type: String
    }
});

module.exports = schema;
