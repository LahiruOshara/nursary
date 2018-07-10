const mongoose = require('mongoose');
const config = require('../config/database')

const leaveApplicationSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    sdate: {
        type: String,
        required: true
    },
    edate: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    accept: {
        type: Boolean,
        reqired: true
    }
})

const leaveApplication = module.exports = mongoose.model('leaveApplication', leaveApplicationSchema);

module.exports.recordApplication = function (application, callback) {
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}
module.exports.getApplications = function (callback) {
    leaveApplication.find(callback);
}

module.exports.deleteApplication = function (application, callback) {

    leaveApplication.deleteOne({ username: application.username }, callback);
}
