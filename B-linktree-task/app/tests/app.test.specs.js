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

const validShowsLink = {

}

const invalidShowsLink = {

}

const supportedShowLink = {

}

const unsupportedShowLink = {

}

const supportedShowLinkForSoldout = {
    
}

const supportedShowLinkForHasTickets = {

}

const shows = {
    validLink: validShowsLink,
    invalidLink: invalidShowsLink,
    supportedShowLink,
    unsupportedShowLink
}

const validMusicLink = {

}

const invalidMusicLink = {

} 

const supportedMusicPlatformLink = {

}

const unsupportedMusicPlatformLink = {

}



const music = {
    validLink: validMusicLink,
    invalidLink: invalidMusicLink,
    unsupportedMusicPlatformLink,
    supportedMusicPlatformLink
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