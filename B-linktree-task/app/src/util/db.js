//TODO use a real db connection
const dbUser = require('../../mockprovider/data/linktrees');
const dbLinks = require('../../mockprovider/data/links');
const errors = require('../statics/errors');
const fileCache = require('./fileCache');
const debug = require('debug')('server:debug')


const getAllLinks = (uid) => {
    //TODO handle possible db provider error types here
    let user = dbUser[uid];
    if (user === undefined) throw errors.UserNotFound(uid);
    const linksForUser = findLinksForUid(uid);      //TODO promisify/await when dealing with a real db
    if (linksForUser.length === 0) throw errors.NoLinksFound(uid); 
    user.tree = linksForUser;
    return user;
}

const findLinksForUid = (uid) => {
    return dbLinks.allLinks.filter(l => l.uid == uid);
}

const createNewLink = (postValidatedData) => {
    return new Promise((res,rej) => {
        fileCache.createNewLink(postValidatedData)
        .then(r => res('OK'))
        .catch(err => rej(err));
    });
}


module.exports = {
    getAllLinks,
    createNewLink
}