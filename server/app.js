const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const usersRouter = require("./routes/users.js");
const expensesRouter = require("./routes/expenses.js");
const debtsRouter = require("./routes/debts.js");

const app = express();

// ✅ CORS Middleware — Apply BEFORE routes
const allowedOrigins = [
  "http://localhost:3000",
  "https://fairsplitapp-76vz.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ Handle preflight requests
app.options("*", cors());

app.use(express.json());

// ✅ Routes
app.use(usersRouter);
app.use(expensesRouter);
app.use(debtsRouter);

// ✅ MongoDB connection
const password = process.env.PASSWORD || "changePasswordHere";
const devUrl = `mongodb+srv://admin:${password}@fairsplit.fjvgxmg.mongodb.net/?retryWrites=true&w=majority`;
const mongoDB = process.env.MONGODB_URI || devUrl;

mongoose.connect(mongoDB).catch((error) =>
  console.error("MongoDB connection error:", error)
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected successfully.");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port ${port}.`);
});

module.exports = app;
