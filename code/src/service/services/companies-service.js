module.exports = function (app) {
	var model = app.get('models').getCollection('companies').model;
	var userModel = app.get('models').getCollection('users').model;
	return {
		getCompanies: function (options, callback) {
			model.find(options, callback);
		},
		create: function (company, callback) {
			var user = company.user;
			user.type = 'company';
			user.state = 'disconnected';
			userModel.create(user, function (error, userCreated) {
				if(error) {
					callback(error);
				} else {
					company.userId = userCreated._id;
					model.create(company, function (error, result) {
						if(error) {
							callback(error);
						} else {
							callback(error, result);
						}
					});
				}
			});
		}		
	};
};
