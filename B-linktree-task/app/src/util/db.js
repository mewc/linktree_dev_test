//TODO use a real db connection
const db = require('../../mockprovider/data/linktrees');
const errors = require('../statics/errors');

const getAllLinks = (uid) => {
    if(db[uid] === undefined) throw errors.UserNotFound(uid);
    else return db[uid];
}

const createNewLink = (postValidatedData) => {

}


module.exports = {
    getAllLinks,
    createNewLink
}