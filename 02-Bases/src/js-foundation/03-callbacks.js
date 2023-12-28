
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
];

function getUserById( id ) {
    const user = users.find( function( user ) {
        return user.id === id;
    } );
}

module.exports = {
    getUserById
}


