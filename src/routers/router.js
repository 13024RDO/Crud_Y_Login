const express = require("express");
const conexion = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  // conexion.query("SELECT * FROM `users` ", (error, results) => {
  //   if (error) {
  //     throw error;
  //   } else {

  //   }
  // });
});

module.exports = router;
