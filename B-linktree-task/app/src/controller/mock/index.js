const mock = require('../../../mockprovider/data/providers');
const errors = require('../../util/errors');


//simplified mock responses for providers
const getForProvider = (req, res, next) => {
    const provider = req.params.provider,
        id = req.query.id;
    if (id === undefined || provider === undefined) throw new Error(`Inputs were found to be missing. Input provider: ${provider} and id: ${id}. Neither can be undefined.`)
    const data = mock[provider]; //Mock lookup for provider 
    if (data === undefined) throw errors.ProviderNotFound(provider);
    const providerOutput = data[req.query.id]; //Mock getting response from provider (lets just assume all use a simple "id" that we could normally parse from a url)
    if (providerOutput === undefined) throw errors.ProviderDataNotFound(`${provider} had no data for ${req.query.id}`);
    res.status(200).json(providerOutput);
}

module.exports = {
    getForProvider
}