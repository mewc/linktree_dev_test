const errors = require('../statics/errors');
const debug = require('debug')('server:debug')
const mappings = require('./mappings');

module.exports = (json) => {
    if (!json.type) throw errors.LinkTypeNotValid(json.type); //no type
    let model = mappings[json.type];
    if (model === undefined) throw errors.LinkTypeNotValid(json.type); //exists in mapping
    model = model(json); //build
    const err = model.validateSync(); //TODO change to .validate((err) => {//callback}) when using real db 
    if (err) throw errors.LinkFormatNotValid(err.message)
    else return model;

}