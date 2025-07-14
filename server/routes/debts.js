const express = require("express");
const router = express.Router();
const debtController = require("../controllers/debt_controller");

// Get a list of all debts.
router.get("/debts", debtController.getDebts);

// Get a list of all optimised debts.
router.get("/optimisedDebts", debtController.getOptimisedDebts);

// Get a debt by lender and borrower.
router.get("/debts/:from/:to", debtController.getDebtBetweenUsers);

// Add a new debt between two users.
router.post("/debts/add", debtController.addDebt);

// Settle a debt between two users.
router.post("/debts/settle", debtController.settleDebt);

// Delete a debt between a lender and borrower.
router.delete("/debts/:from/:to", debtController.deleteDebtBetweenUsers);

module.exports = router;
