module.exports = function (app) {
	var model = app.get('models').getCollection('orders').model;
	return {
		getOrders: function (options, callback) {
			model.find(options, callback);
		},
		create: function (order, callback) {
			model.create(order, callback);
		}		
	};
};
