
const START = "START";
const FAIL = "FAIL";
const END = "END";
const SUCCESS = "SUCCESS";

export const ACTION_STATE = {
    START, FAIL, SUCCESS, END
}

const LOADING_TYPE = "LOADING";
const TREELINK_TYPE = "TREELINK";
const SHOWS_TYPE = "SHOWS";
const MUSIC_TYPE = "MUSIC";

export const ACTION_TYPES = {
    LOADING_TYPE,
    TREELINK_TYPE,
    SHOWS_TYPE,
    MUSIC_TYPE
}


//scopes
const SCOPE_APP = "APP";
const SCOPE_TREE = "TREE";

export const SCOPES = {
    SCOPE_APP,
    SCOPE_TREE
}


const NOTFOUND = "UDATA_NOTFOUND";
const EMPTY = "UDATA_EMPTY";

export const USER_DATA_STATES = {
    NOTFOUND,
    EMPTY
}


const CLASSIC = "CLASSIC";
const MUSIC = "MUSIC";
const SHOWS = "SHOWS";
export const LINK_TYPES = {
    SHOWS, MUSIC, CLASSIC
}

const LINK_TOGGLE_ON = "ON";
const LINK_TOGGLE_OFF = "OFF";
export const LINK_TOGGLE = {
    ON: LINK_TOGGLE_ON,
    OFF: LINK_TOGGLE_OFF
}




