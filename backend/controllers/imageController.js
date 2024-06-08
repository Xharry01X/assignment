const expressAsyncHandler=require("express-async-handler")
const Image=require("../models/imageModel")

const createImage=expressAsyncHandler(async(req,res,next)=>{
    try {
        const { url, name, description, caption, steps, userRatings } = req.body;

        const newImage = new Image({ url, name, description, caption, steps, userRatings });
        const image = await newImage.save();
        res.json(image);
    } catch (error) {
        next(error); 
    }
})

module.exports={createImage}