const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
    invoiceName: String,
    invoiceAmount: String,
});

const invoiceModel = mongoose.model('Invoices', invoiceSchema);

module.exports = invoiceModel;