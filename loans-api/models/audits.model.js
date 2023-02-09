const mongoose = require("mongoose");

const auditSchema = mongoose.Schema({
    auditName: String,
    auditAmount: String,
});

const auditModel = mongoose.model('Audits', auditSchema);

module.exports = auditModel;