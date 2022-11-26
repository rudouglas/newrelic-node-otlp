/*app.js*/
const express = require("express");

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World")
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});