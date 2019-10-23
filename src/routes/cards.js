const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cards");

router
  .get("/", cardsController.getCards)

module.exports = router;
