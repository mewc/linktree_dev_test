import mongoose from 'mongoose';


const base = {
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 144,
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
};

const base_link = new mongoose.Schema(base)


const music_link = new mongoose.Schema({
    ...base,
    embedLink: {
        type: String,
    }
})
const show_link = new mongoose.Schema({
    ...base,
    eventLink: {
        type: String
    }
})


module.exports = {base_link, music_link, show_link};