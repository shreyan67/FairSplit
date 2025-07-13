const mongoose = require("mongoose");

const uri = "mongodb+srv://shreyan67:Sa5459s@cluster0.ihfzj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true })
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    try {
      const result = await mongoose.connection.collection('users').dropIndex('email_1');
      console.log("🗑️ Index dropped:", result);
    } catch (err) {
      console.error("⚠️ Error:", err.message);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(err => console.error("❌ Connection error:", err.message));
