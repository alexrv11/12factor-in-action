var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 9090);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./client')(app);
require('./service')(app);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
