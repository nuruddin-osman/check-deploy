const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello hame page");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
