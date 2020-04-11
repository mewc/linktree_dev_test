const mongoose = require('mongoose');
const validators = require('../util/validators');

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

classic_link_schema.path('link').validate(validators.isEmail, 'Invalid link URL.');
music_link_schema.path('link').validate(validators.isEmail, 'Invalid link URL.');
show_link_schema.path('link').validate(validators.isEmail, 'Invalid link URL.');
music_link_schema.path('embedLink').validate(validators.isEmail, 'Invalid embed url URL.');
show_link_schema.path('eventLink').validate(validators.isEmail, 'Invalid eventLink URL.');


module.exports = { 
    ClassicLink: mongoose.model('ClassicLink', classic_link_schema),
    ShowLink: mongoose.model('ShowLink', show_link_schema),
    MusicLink: mongoose.model('MusicLink', music_link_schema)
};