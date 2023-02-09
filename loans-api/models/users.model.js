const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    dob: Date
});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;