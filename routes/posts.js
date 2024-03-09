const mongoose = require('mongoose');

// Define the schema
const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []

    }
});

// Create a model using the schema
module.exports = mongoose.model('Post', postSchema);

// Export the model