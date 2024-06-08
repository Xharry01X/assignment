const expressAsyncHandler=require("express-async-handler")
const Image=require("../models/imageModel")

const createImage=expressAsyncHandler(async(req,res,next)=>{
    try {
        const { url, name, description, caption, steps, userRatings } = req.body;

        const newImage = new Image({ url, name, description, caption, steps, userRatings });
        const image = await newImage.save();
        res.json(image);
    } catch (err) {
        next(err); 
    }
})

const getImages=expressAsyncHandler(async(req,res,next)=>{
    try {
        const images=await Image.find()
        res.status(200).json(images)
    } catch (err) {
        next(err)
    }
})

module.exports={createImage,getImages}