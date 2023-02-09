const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentName: String,
    paymentType: String,
    paymentAmount: String,
    paymentDate: Date
});

const paymentModel = mongoose.model('Payments', paymentSchema);

module.exports = paymentModel;