const mock = require('../../../mockprovider/data/providers');
const errors = require('../../statics/errors');


//simplified mock responses for providers
const getForProvider = (req,res,next) => {
    const provider = req.params.provider;
    const data = mock[provider];
    if (data === undefined) throw errors.ProviderNotFound;
    const eventData = data[req.query.id];
    if (eventData === undefined) throw errors.ProviderDataNotFound;
    res.status(200).json(eventData);
}

module.exports = {
    getForProvider
}