const mongoose = require("mongoose");

const loanCategorySchema = mongoose.Schema({
    loanCategoryName: String,
    loanCategoryType: String,
    loanCategoryAmount: Number,
    loanCategoryIssueDate: Date,
    loanCategoryStatus: String
});

const loanCategoryModel = mongoose.model('LoanCategory', loanCategorySchema);

module.exports = loanCategoryModel;