//Url example type mappings for each provider that are acceptable

//TODO more accurate regex for each provider
module.exports = {
    spotify: [
        /https:\/\/open.spotify.com\/track\/*/,
        /https:\/\/open.spotify.com\/album\/*/,
        /localhost/
    ],
    songkick: [
        /https:\/\/api.songkick.com\/*\/*/,
        /localhost/
    ]
}