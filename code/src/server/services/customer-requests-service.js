module.exports = function (app) {
	var model = app.get('models').getCollection('customer-requests').model;
	return {
		getCustomerRequests: function (options, callback) {
			console.log(options);
			model.find(options, callback);
		},
		create: function (customerRequest, callback) {
			model.create(customerRequest, callback);
		}		
	};
}
