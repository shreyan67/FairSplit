const mongoose = require("mongoose");

// Replace 'test' with your database name if different
const uri = "mongodb://localhost:27017/Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const result = await mongoose.connection
        .collection("users")
        .dropIndex("email_1");
      console.log("Index dropped:", result);
    } catch (err) {
      console.error("Error:", err.message);
    } finally {
      await mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err.message);
  });
