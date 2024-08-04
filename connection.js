const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
