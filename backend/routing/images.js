const express = require('express');
const imageRouter = express.Router();

const auth = require('../middlewares/auth');
const { createImage, getImages, getImageById,updateImage,deleteImage} = require( '../controllers/imageController' );

imageRouter.post('/create', createImage);
imageRouter.get('/images', getImages);
imageRouter.get('/:id', getImageById);
imageRouter.put('/update/:id',  updateImage);
imageRouter.delete('/:id', deleteImage);

module.exports = imageRouter;