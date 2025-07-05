const Rating = require("../models/rating");
const Movie = require("../models/movie");

// Puan ekle
exports.rateMovie = async (req, res) => {
    try {
        const { user, movie, rating, comment } = req.body;

        const newRating = new Rating({ user, movie, rating, comment });
        await newRating.save();

        const ratings = await Rating.find({ movie });
        const total = ratings.reduce((sum, r) => sum + r.rating, 0);
        const avg = total / ratings.length;

        await Movie.findByIdAndUpdate(movie, {
            averageRating: avg,
            ratingCount: ratings.length
        });

        res.status(201).json(newRating);
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};

// Kullanıcı yorumları getir
exports.getUserRatings = async (req, res) => {
    try {
        const { userId } = req.params;
        const ratings = await Rating.find({ user: userId }).populate("movie");
        res.json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};

// Yorum sil
exports.deleteRating = async (req, res) => {
    try {
        const { id } = req.params;
        const rating = await Rating.findById(id);
        if (!rating) return res.status(404).json({ msg: "Yorum bulunamadı!" });

        await Rating.findByIdAndDelete(id);

        const ratings = await Rating.find({ movie: rating.movie });
        const total = ratings.reduce((sum, r) => sum + r.rating, 0);
        const avg = ratings.length ? total / ratings.length : 0;

        await Movie.findByIdAndUpdate(rating.movie, {
            averageRating: avg,
            ratingCount: ratings.length
        });

        res.json({ msg: "Yorum silindi." });
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
};
