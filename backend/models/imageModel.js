const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String }
});

const StepSchema = new mongoose.Schema({
    stepNumber: { type: Number, required: true },
    description: { type: String, required: true }
});

const ImageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    caption: { type: String, required: true },
    steps: [StepSchema],
    userRatings: [RatingSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Pre-save middleware to update the updatedAt field
ImageSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Image', ImageSchema);
