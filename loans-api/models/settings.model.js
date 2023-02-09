const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
    settingName: String,
    settingType: String,
});

const settingModel = mongoose.model('Settings', settingSchema);

module.exports = settingModel;