module.exports = function (app) {
	var model = app.get('models').getCollection('stores').model;
	return {
		getStores: function (options, callback) {
			model.find(options, callback);
		},
		create: function (order, callback) {
			model.create(order, callback);
		}		
	};
};
