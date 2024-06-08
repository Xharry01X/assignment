const express = require('express');
const imageRouter = express.Router();

const auth = require('../middlewares/auth');
const { createImage } = require( '../controllers/imageController' );

imageRouter.post('/create', auth, createImage);
// router.get('/', auth, getImages);
// router.get('/:id', auth, getImageById);
// router.put('/:id', auth, updateImage);
// router.delete('/:id', auth, deleteImage);

module.exports = imageRouter;