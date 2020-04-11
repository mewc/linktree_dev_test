//file interfacer used as a mock db for this task
//TODO use a real cache system for this

const fs = require('fs');
const debug = require('debug')('server:debug')


const createNewLink = (data) =>{
    return new Promise((res, rej) => {
        debug('Mocking the creation of links');
        res("OK");
    })
}

module.exports = { createNewLink}