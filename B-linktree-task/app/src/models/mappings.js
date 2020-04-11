const model = require('./links.model.js');

module.exports = {
    classic: (data) => new model.ClassicLink(data),
    music: (data) => new model.MusicLink(data),
    shows: (data) => new model.ShowLink(data)
}