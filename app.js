const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/", require("./routers/router"));

app.listen(4000, (res, req) => {
  console.log("SERVER RUNNING IN http://localhost:4000");
});
