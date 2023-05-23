const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "debit"
  },
  ccv: {
    type: String,
    required: true,
  },
  expireDate: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 1,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
