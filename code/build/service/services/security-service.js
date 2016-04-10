module.exports = function (app) {
    var userModel = app.get('models').getCollection('users').model;
    return {
        login: function (credential, token, callback) {
            console.log('credential server', credential);
            userModel.update(credential, { token: token, state:'connected' }, function (error,data) {
                if(error) {
                    callback(error);
                } else {
                    if(data.nModified == 0) {
                        error = { error: 'user/password incorrect'};
                        callback(error);
                    } else {
                        userModel.findOne(credential, callback);
                    }
                }
            });
            //userModel.findOneAndUpdate(credential, { token: token, state:'connected' }, { upsert: true }, callback);
        },
        authenticate: function(req, res, next) {
            var bearerToken;
            var bearerHeader = req.headers["authorization"];
            if (typeof bearerHeader !== 'undefined') {
                console.log('bearer', bearerHeader);
                var bearer = bearerHeader.split(" ");
                bearerToken = bearer[0];
                userModel.findOne({token:bearerToken}, function(error, result) {
                   if(error) {
                       res.send(error);
                   } else {
                       if(result === null) {
                           var msg = {message:"Credencial no valida", auth:false};
                           res.status(403).send(msg);
                       }
                       else {
                           req.body.token = bearerToken;
                           next();
                       }
                   }
                });
            } else {
                res.send(403);
            }
        },
        logout: function(token,callback) {
            var randtoken = require('rand-token');
            userModel.findOneAndUpdate({token:token}, { token: randtoken.generate(32), state:'disconnected' }, { upsert: true }, callback);
        }
    };
};
