const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");
const upload = require("../middleware/upload"); // Eğer poster yüklenecekse

// Film ekleme (poster yüklemeden)
router.post("/add", movieController.addMovie);

// Eğer poster ile birlikte eklenecekse (form-data ile)
router.post("/add-with-poster", upload.single("poster"), movieController.addMovie);

// Tüm filmleri getir
router.get("/", movieController.getAllMovies);

// Filtreli film listesi
router.get("/filter", movieController.getFilteredMovies);

module.exports = router;
