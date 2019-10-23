const express = require("express");
const router = express.Router();

const cards = require("./cards");

router.use("/cards", cards);

module.exports = router;
