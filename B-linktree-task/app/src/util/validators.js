const debug = require('debug')('server:debug')

module.exports = {
    isEmail: (val) => {
        urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        return urlRegex.test(val);
    }
}