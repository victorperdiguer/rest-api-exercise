const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Show = new Schema ({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    launched: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = model('Show', Show);