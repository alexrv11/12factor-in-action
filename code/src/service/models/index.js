/**
 * The object returned manages all collections defined in the module
 * using the getCollection method to return an collection
 *
 * @return <Object>
 */
module.exports = {
    getCollection: function (collName) {
        var path = './' + collName;
        var collection = require(path);
        return collection;
    }
};