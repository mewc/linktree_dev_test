const mock = require('../../util/mock');


const getForProvider = (config) => {
    const {provider, id} = config;
    const mockGet = mock.get(provider, id);
    
    return mockGet;
}




module.exports = {
    getForProvider
}