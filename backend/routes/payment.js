const express = require("express");
const { body } = require("express-validator/check");

const paymentController = require("../controllers/payment");

const router = express.Router();

//payment
router.post("/create", paymentController.create);
router.put("/update/:id", paymentController.update);
router.get("/get", paymentController.geteAllPayments);
router.delete("/delete/:id", paymentController.deletePayment);

module.exports = router;
