module.exports = function (app) {
	var model = app.get('models').getCollection('products').model;
	return {
		getProducts: function (options, callback) {
			model.find(options, callback);
		},

		create: function (product, callback) {
			model.create(product, callback);
		}		
	};
};
