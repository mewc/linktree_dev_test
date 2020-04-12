const axios = require('axios');
const isUrl = require('../validators').isUrl;
const debug = require('debug')("server:debug");
const errors = require('../../statics/errors');
const providerLinkMappings = require('./mappings');

const linkReturnsExpectedPayloadForProvider = (link) => {
    return axios.get(link)
        .then(r => {
            return true;
        }).catch(err => {
            throw errors.ProviderDataNotFound(err.message);
        });

}

const isValidProviderLink = (link, provider) => {
    //TODO do further link checking
    const map = providerLinkMappings[provider];
    return !!(map !== undefined && (map.some(regex => regex.test(link))))
}

const validateModelLinks = (model) => {
    let calls = [];
    const provider = model.provider;
    Object.keys(model.toObject()).forEach(i => { //Loop through model attributes and find the extra data links
        const value = model[i];
        if (!isUrl(value) || i == 'link') return; 
        if (isValidProviderLink(value, provider)) calls.push(linkReturnsExpectedPayloadForProvider(value, provider));
        else throw errors.ProviderLinkNotSupported(value, provider);
    })
    return Promise.all(calls).then((res) => {
        debug(Object.values(res).map(r => r.body));
        return true
    }).catch(err => err);
}

module.exports = {
    validateModelLinks
}