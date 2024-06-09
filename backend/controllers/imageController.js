const expressAsyncHandler=require("express-async-handler")
const Image=require("../models/imageModel")

const createImage = expressAsyncHandler(async (req, res, next) => {
    try {
      const { url, name, description, caption, steps, rating } = req.body;
  
      // Validate steps to ensure they contain stepNumber and description
      if (!Array.isArray(steps) || steps.some(step => !step.stepNumber || !step.description)) {
        return res.status(400).json({ message: 'Invalid steps format' });
      }
  
      const newImage = new Image({
        url,
        name,
        description,
        caption,
        steps,
        rating,
       
      });
  
      const image = await newImage.save();
      res.json(image);
    } catch (err) {
      next(err);
    }
  });

const getImages=expressAsyncHandler(async(req,res,next)=>{
    try {
        const images=await Image.find()
        res.status(200).json(images)
    } catch (err) {
        next(err)
    }
})

const getImageById=expressAsyncHandler(async(req,res,next)=>{
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ msg: 'Image not found' });
        }
        res.json(image);
    } catch (err) {
        next(err);
    }
})
const updateImage=expressAsyncHandler(async(req,res,next)=>{
    

    try {
        const { url, name, description, caption, steps, userRatings } = req.body;
        let image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ msg: 'Image not found' });
        }

        image.url = url || image.url;
        image.name = name || image.name;
        image.description = description || image.description;
        image.caption = caption || image.caption;
        image.steps = steps || image.steps;
        image.userRatings = userRatings || image.userRatings;

        await image.save();
        res.json(image);
    } catch (err) {
        next(err);
    }
}
)

const deleteImage = expressAsyncHandler(async (req, res, next) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ msg: 'Image not found' });
        }

        await Image.deleteOne({ _id: req.params.id }); // Use deleteOne method of the model
        res.json({ msg: 'Image removed' });
    } catch (err) {
        next(err);
    }
});


module.exports={createImage,getImages,getImageById,updateImage,deleteImage}