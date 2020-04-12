const mockLinkProvider = require('../mockprovider/data/links');

const validUid = "legendarypinkdots";
const invalidUid = "INVALIDUID";
const longTitle = "thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle"
const shortTitle = "thisisashorttitle";
const invalidType = "INVALIDTYPE";
const unknownType = "UNKNOWNTYPE";

const longTitleLink = ((c) => { c.title = longTitle; return c; })(mockLinkProvider.classic())
const shortTitleLink = ((c) => { c.title = shortTitle; return c; })(mockLinkProvider.classic())
const invalidLinkType = ((c) => { c.type = invalidType; return c; })(mockLinkProvider.classic())
const unknownLinkType = ((c) => { c.type = unknownType; return c; })(mockLinkProvider.classic())

const validClassicLink = ((c) => c)(mockLinkProvider.classic());
const invalidClassicLink = ((c) => { delete c.link; return c; })(mockLinkProvider.classic())
const invalidClassicUrl = ((c) => { c.link = "htxp://somebadlink"; return c; })(mockLinkProvider.classic())

const classic = {
    validLink: validClassicLink,
    invalidLink: invalidClassicLink,
    invalidLinkUrl: invalidClassicUrl
}


const validShowLink = ((c) => c)(mockLinkProvider.show());
const invalidShowLink = ((c) => { delete c.eventLink; return c; })(mockLinkProvider.show())
const invalidShowEventUrl = ((c) => { c.eventLink = "htxp://somebadlink"; return c; })(mockLinkProvider.show())
const deadShowEventUrl = ((c) => { c.eventLink = "http://api.songkickbutnotreally.com/"; return c; })(mockLinkProvider.show())
const supportedShowPlatform = validShowLink;
const unsupportedShowPlatform = ((c) => { c.provider = "ticketek"; return c; })(mockLinkProvider.show())

//TODO test out when hitting a real endpoint to test
const supportedShowLinkForSoldout = ((c) => { c.eventLink = "http://localhost:3333/songkick?id=soldout"; return c; })(mockLinkProvider.show())
const supportedShowLinkForHasTickets = ((c) => { c.eventLink = "http://localhost:3333/songkick?id=available"; return c; })(mockLinkProvider.show())

const shows = {
    deadShowEventUrl,
    invalidShowEventUrl,
    supportedShowPlatform,
    unsupportedShowPlatform,
    validLink: validShowLink,
    supportedShowLinkForSoldout,
    invalidLink: invalidShowLink,
    supportedShowLinkForHasTickets
}


const validMusicLink = ((c) => c)(mockLinkProvider.music());
const invalidMusicLink = ((c) => { delete c.embedLink; return c; })(mockLinkProvider.music())
const invalidMusicEmbedUrl = ((c) => { c.embedLink = "htxp://somebadlink"; return c; })(mockLinkProvider.music())
const deadMusicEmbedUrl = ((c) => { c.embedLink = "http://notspotifyembedurl.com"; return c; })(mockLinkProvider.music())
const supportedMusicPlatformLink = validMusicLink;
const unsupportedMusicPlatformLink = ((c) => { c.provider = "FAKEPROVIDER"; return c; })(mockLinkProvider.music())


const music = {
    validLink: validMusicLink,
    invalidLink: invalidMusicLink,
    invalidMusicEmbedUrl,
    unsupportedMusicPlatformLink,
    supportedMusicPlatformLink,
    deadMusicEmbedUrl
}



module.exports = {
    longTitleLink,
    shortTitleLink,
    invalidLinkType,
    unknownLinkType,
    validUid,
    invalidUid,
    classic,
    shows, 
    music
}