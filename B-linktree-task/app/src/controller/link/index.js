const db = require('../../util/db');
const debug = require('debug')('server:debug')
const buildModel = require('../../models/builder');
const providerLinkValidator = require('../../util/provider').validateModelLinks;

const makeNewLink = (req, res, next) => {
    let model = false;
    try { model = buildModel(req.body); }
    catch (err) {
        //TODO handle more db specific errors when using real db - pass real status code/msg in.
        debug({ msg: err.message });
        err.status = 422;
        throw err;
    }
    //validate links received by client with respective providers
    providerLinkValidator(model)
        .then(valid => {
            if (valid) {
                return db.createNewLink(model)
            } else {
                debug('invalid provider link');
            }
        })
        .then((r) => {
            res.status(200).json({ status: "OK", linkId: model._id })
        }).catch(err => {
            //TODO handle more specific db error codes when parsing responses
            err.status = 400;
            throw err;
        })


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