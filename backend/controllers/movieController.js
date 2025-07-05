const Movie = require("../models/movie");

// Film ekle
exports.addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};

// Tüm filmleri getir
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};

// Filtreli filmleri getir
exports.getFilteredMovies = async (req, res) => {
    try {
        const { genre, director, year, minRating } = req.query;
        let filters = {};
        if (genre) filters.genre = genre;
        if (director) filters.director = director;
        if (year) filters.year = parseInt(year);
        if (minRating) filters.averageRating = { $gte: parseFloat(minRating) };

        const movies = await Movie.find(filters);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};
