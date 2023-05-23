const Payemnt = require("../models/payment");

exports.create = async (req, res, next) => {
  const json = req.body;
  try {
    const payment = new Payemnt(json);
    const result = await payment.save();
    res.status(201).json({ message: "Payment created!", payment });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.update = async (req, res, next) => {
  try {
    const result = await Payemnt.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, { new: true });
    res.status(201).json({ message: "Payment updated!", result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.geteAllPayments = async (req, res, next) => {
  try {
    const payment = await Payemnt.find();
    res.status(201).json({ message: "Paymentes fetched!", payment });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payemnt.deleteOne({_id: req.params.id});
    res.status(201).json({ message: "Payment deleted!", payment });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};