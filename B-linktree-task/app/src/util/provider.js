const axios = require('axios');
const isUrl = require('../util/validators').isUrl;
const debug = require('debug');
const isValidLink = (link) => {
    //TODO do further link checking 
    return axios.get(link)
    .then(r => {
        return true;
    }).catch(err => {
        debug(err);
        return false;
    });
}

const validateModelLinks = (model) => {
    let calls = [];
    Object.keys(model).forEach(i => {
        const obj = model[i];
        if (isUrl(obj)) calls.push(isValidLink())
    })
    return Promise.all(calls).then((r) => {
        debug(Object.keys(r));
        return true
    }).catch(err => err);
}

module.exports = {
    validateModelLinks
}