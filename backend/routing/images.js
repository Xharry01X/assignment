const express = require('express');
const imageRouter = express.Router();

const auth = require('../middlewares/auth');
const { createImage, getImages } = require( '../controllers/imageController' );

imageRouter.post('/create', auth, createImage);
imageRouter.get('/images', auth, getImages);
// router.get('/:id', auth, getImageById);
// router.put('/:id', auth, updateImage);
// router.delete('/:id', auth, deleteImage);

module.exports = imageRouter;