const mongoose = require('mongoose');
const validators = require('../util/validators');
const mappings = require('./mappings');
const Schema = mongoose.Schema;
const debug = require('debug')('server:debug')


const url_validator = {
    validator: validators.isUrl, message: 'Invalid URL input found.'
}


var options = { discriminatorKey: 'kind' };
let classic_link_schema = new Schema({
    title: { type: String, required: true, minlength: 1, maxlength: 144, },
    link: { type: String, required: true, minlength: 5, maxlength: 255, validate: url_validator },
    //TODO centralise validation/activation of link types elsewhere (instead of keymap enum)
    type: { type: String, required: true, enum: Object.keys(mappings).map(r => r) },
    dateCreated: { required: true, type: Date },
    status: { required: true, type: String }
}, options);
const ClassicLinkModel = mongoose.model('ClassicLink', classic_link_schema)



let music_link_schema = Schema({
    embedLink: { required: true, type: String, validate: url_validator }, //TODO build in url validation hitting 3rd party providers here
    provider: { required: true, type: String }
}, options);
const MusicLinkModel = ClassicLinkModel.discriminator('Music', music_link_schema);

let show_link_schema = Schema({
    eventLink: { required: true, type: String, validate: url_validator },
    provider: { required: true, type: String }
}, options);
const ShowLinkModel = ClassicLinkModel.discriminator('Show', show_link_schema);


//TODO add more models that inherit/discriminate others as things build out

module.exports = {
    ClassicLink: ClassicLinkModel,
    ShowLink: ShowLinkModel,
    MusicLink: MusicLinkModel
};