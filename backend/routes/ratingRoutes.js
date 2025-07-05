const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/ratingController");

// Filme puan ve yorum ekle
router.post("/", ratingController.rateMovie);

// Kullanıcının puanları
router.get("/user/:userId", ratingController.getUserRatings);

// Yorumu sil
router.delete("/:id", ratingController.deleteRating);

module.exports = router;
