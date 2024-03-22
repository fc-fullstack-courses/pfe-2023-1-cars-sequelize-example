const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CONSTANTS = require('../constants');

const imagesPath = path.resolve(CONSTANTS.FILE_PATH, 'images');

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, {
    recursive: true,
  });
}

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageUpload = multer({ storage: storageConfig });

module.exports = imageUpload;
