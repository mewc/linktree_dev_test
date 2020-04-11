/*
    THIS IS A MOCK FILE FOR A "DB" THAT HAS ALL LINKTREES OF USERS.
*/

//Using object to mock uniques and similar lookup
module.exports = {
    laurelhalo: {
        uid: 'laurelhalo',
        joinDate: new Date(Date.now() - 2000000000),
        email: "laurelhalo@gmail.com"
    },
    rsteviemoore: {
        uid: 'rsteviemoore',
        joinDate: new Date(Date.now() - 6000000000),
        email: "rsm@gmail.com"
    },
    legendarypinkdots:{
        uid: 'legendarypinkdots',
        joinDate: new Date(Date.now() - 3000000000),
        email: "lpd@gmail.com"
    } 
}