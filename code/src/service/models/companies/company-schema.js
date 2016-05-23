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
    nit: {
        type: String
    },
	companyType: {
        type: String
    },
    pavilion: {
        type: String
    },
    category: {
        type: String
    },
    position: position,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = schema;
