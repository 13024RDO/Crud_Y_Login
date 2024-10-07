const express = require("express");
const router = express.Router();

router.get("/contactos", (req, res) => {
  res.send("CONTANTO");
});

module.exports = router;
