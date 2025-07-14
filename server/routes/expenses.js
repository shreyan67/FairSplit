const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense_controller");

// Get all expenses in the group.
router.get("/expenses", expenseController.getExpenses);

// Add an expense.
router.post("/expenses", expenseController.addExpense);

// Temporary route for adding settlement as expense.
router.post("/expenses/settlement", expenseController.addSettlement);

module.exports = router;
