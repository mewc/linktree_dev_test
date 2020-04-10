import mongoose from 'mongoose';

const base_link = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 144,
    },
    uid: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 64
    },
    link: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    type: {
        type: String,
        enum: []
    },
    dateCreated: {
        type: Date
    }
})

module.exports = base_link;