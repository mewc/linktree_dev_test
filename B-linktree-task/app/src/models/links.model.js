const mongoose = require('mongoose');


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


let music = base;
music.embedLink = {
    type: String,
}

let shows = base;
shows.eventLink = {
    type: String
}


const classic_link_schema = new mongoose.Schema(base)
const music_link_schema = new mongoose.Schema(music)
const show_link_schema = new mongoose.Schema(shows)

const ClassicLink = mongoose.model('ClassicLink', classic_link_schema);
const ShowLink = mongoose.model('ShowLink', show_link_schema);
const MusicLink = mongoose.model('MusicLink', music_link_schema);


module.exports = { ClassicLink, ShowLink, MusicLink };