const debug = require('debug')('server:debug');
const providers = require('../config/providers');
module.exports = {
    isUrl: (val) => {
        urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        // debug({val, test:urlRegex.test(val)})
        return urlRegex.test(val);
    },
    isSupportedProvider: (type, provider) => {
        debug({ provider, result: providers.isSupportedProvider(type, provider)});
        return providers.isSupportedProvider(type,provider)
    }
}