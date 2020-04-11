const errors = require('../statics/errors');
const debug = require('debug')('server:debug')
const mappings = require('./mappings');
const isSupportedProvider = require('../util/validators').isSupportedProvider;
const hasProviders = require('../config/providers').hasProviders;

module.exports = (json) => {
    if (!json.type) throw errors.LinkTypeNotValid(json.type); //no type
    let model = mappings[json.type];
    if (model === undefined) throw errors.LinkTypeNotValid(json.type); //exists in mapping of types
    model = model(json); //build //TODO manage create/modifiedLast dates
    const err = model.validateSync(); //TODO change to .validate((err) => {//callback}) when using real db 
    if (err) throw errors.LinkFormatNotValid(err.message);
    if (hasProviders(json.type) && !isSupportedProvider(json.type, json.provider)) throw errors.ProviderNotSupported(json.type, json.provider);
    else return model;
}