const db = require('../../util/db');
const debug = require('debug')('server:debug')

const makeNewLink = (req, res, next) => {
    debug(req.body);
}

/**
 * @description take in userid as path param, accept querystring sort to enable date sorc
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getLinktree = (req, res, next) => {
    let treeData = false;
    try { treeData = db.getAllLinks(req.params.uid); } 
    catch (err) { res.status(404).send({ message: err.message, type: err.name, statusCode: 404 }) }
    //TODO handle error response

    //TODO accept more, and finer detailed query values
    if (!Object.keys(req.query).includes('sort')) return res.json(treeData);
    const sortedTree = treeData.tree.sort((a, b) => {
        // return new Date(a.dateCreated) - new Date(b.dateCreated); //descending
        return new Date(b.dateCreated) - new Date(a.dateCreated); //ascending
    });
    treeData.tree = sortedTree;
    res.json(treeData);
}

module.exports = {
    getLinktree,
    makeNewLink
}