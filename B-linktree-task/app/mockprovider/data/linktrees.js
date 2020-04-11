/*
    THIS IS A MOCK FILE FOR A "DB" THAT HAS ALL LINKTREES OF USERS.
*/
const classic = () => ({
    title: "Classic link type",
    link: "https://mewc.info",
    type: "classic",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    status: 'enabled'
});

const music = () => ({
    title: "Music link type",
    link: "https://mewc.info",
    type: "music",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    embedLink: "https://open.spotify.com/track/1rJBpLdCAaVQ3cvrm5hCoN?si=UU-VkHTtRq-ENw-uKm0ERw",
    status: 'enabled'
});

const show = () => ({
    title: "Show link type",
    link: "https://mewc.info",
    type: "show",
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 1000000000000)),
    eventLink: "https://api.songkick.com/api/3.0/artists/mbid:123456789/calendar.json",
    status: 'enabled'
});


module.exports = {
    laurelhalo: {
        joinDate: new Date(Date.now() - 2000000000),
        email: "laurelhalo@gmail.com",
        tree: [
            classic(), classic(), classic(), show()
        ]
    },
    rsteviemoore: {
        joinDate: new Date(Date.now() - 6000000000),
        email: "rsm@gmail.com",
        tree: [
            classic(), classic(), music(), show()
        ]
    },
    legendarypinkdots:{
        joinDate: new Date(Date.now() - 3000000000),
        email: "lpd@gmail.com",
        tree: [
            classic(), music(), show()
        ]
    } 
}