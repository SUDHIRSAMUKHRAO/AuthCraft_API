const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Auth API is running 🚀");
});

module.exports = app;
