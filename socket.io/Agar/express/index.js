const { app } = require("../server");

app.get("/abc", (req, res) => {
  res.send("Hello");
});

module.exports = app;
