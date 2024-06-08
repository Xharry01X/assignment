const express = require('express');
const imageRouter = express.Router();

const auth = require('../middlewares/auth');
const { createImage, getImages, getImageById,updateImage,deleteImage} = require( '../controllers/imageController' );

imageRouter.post('/create', auth, createImage);
imageRouter.get('/images', auth, getImages);
imageRouter.get('/:id', auth, getImageById);
imageRouter.put('/update/:id', auth, updateImage);
imageRouter.delete('/:id', auth, deleteImage);

module.exports = imageRouter;