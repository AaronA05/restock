var orm = require("../config/orm.js");

var shoes = {
    selectAll: function (cb) {
        orm.selectAll("shoes", function (data) {
            cb(data);
        });
    }
    // insertOne: function (value, cb) {
    //     orm.insertOne("shoes", value, cb);
    // },
    // updateOne: function (value, cb) {
    //     orm.updateOne("shoes", value, cb);
    // }
}


module.exports = shoes;