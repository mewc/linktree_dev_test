const longTitle = "thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle_thisisalongtitle"
const shortTitle = "thisisashorttitle";


const longTitleLink = {
    title: longTitle,
}

const shortTitleLink = {
    title: shortTitle,
}

const invalidLinkType = {
    type: "INVALID_TYPE"
}
const unknownLinkType = {
    type: "UNKNOWN_TYPE"
}

const validClassicLink ={

}

const invalidClassicLink = {

}

const classic = {
    validLink: validClassicLink,
    invalidLink: invalidClassicLink
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

const validUid = "TESTUSER1";
const invalidUid = "INVALIDUID";

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