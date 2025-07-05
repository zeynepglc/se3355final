const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: [{ type: String, required: true }],
    director: { type: String },
    actors: [{ type: String }],
    duration: { type: Number },
    description: { type: String },
    poster: {
        type: String,
        required: true,
        default: function () {
            return `/posters/${this.title.toLowerCase().replace(/\s+/g, "_")}.png`;
        }
    },
    averageRating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);
