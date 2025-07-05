const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "backend/posters");
    },
    filename: (req, file, cb) => {
        cb(null, "poster_" + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Sadece JPEG, PNG veya JPG dosyaları yükleyebilirsiniz!"), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
