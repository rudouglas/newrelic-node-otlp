const express = require("express");
const path = require("path")
const app = express();
const api = require("@opentelemetry/api");


const PORT = process.env.PORT || "8080";

app.get("/ping", (_, res) => {
  const currentSpan = api.trace.getSpan(api.context.active());

  // Add custom attribute
  currentSpan.setAttribute("page", "/ping")
  res.sendFile(path.join(__dirname, '/index.html'));
  // res.status(200).send("Pong");
});

app.get('/error', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});