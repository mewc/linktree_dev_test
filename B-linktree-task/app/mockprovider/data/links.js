

const classic = (uid) => ({
    uid,
    title: "Classic link type",
    link: "https://linktr.ee",
    type: "classic",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    status: 'enabled'
});

const music = (uid) => ({
    uid,
    title: "Music link type",
    link: "https://linktr.ee",
    type: "music",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    embedLink: "https://open.spotify.com/track/1rJBpLdCAaVQ3cvrm5hCoN?si=UU-VkHTtRq-ENw-uKm0ERw",
    status: 'enabled'
});

const show = (uid) => ({
    uid,
    title: "Show link type",
    link: "https://linktr.ee",
    type: "show",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    eventLink: "https://api.songkick.com/api/3.0/artists/mbid:123456789/calendar.json",
    status: 'enabled'
});


const allLinks = [
    show('laurelhalo'),
    classic('laurelhalo'),
    classic('laurelhalo'),
    music('laurelhalo'),
    show('legendarypinkdots'),
    classic('legendarypinkdots'),
    classic('legendarypinkdots'),
    classic('legendarypinkdots'),
    classic('legendarypinkdots'),
    music('legendarypinkdots'),
    show('rsteviemoore'),
    classic('rsteviemoore'),
    classic('rsteviemoore'),
    classic('rsteviemoore'),
    classic('rsteviemoore'),
    classic('rsteviemoore'),
    music('rsteviemoore'),
]




module.exports = {
    classic, music, show,
    allLinks
}
