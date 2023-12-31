
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

function getUserById( id, callbacks ) {
    const user = users.find( function( user ) {
        return user.id === id;
    } );

    if( !user ) {
        return callbacks(`USUARIO no encontrado con el id ${id}`);
    }

    return callbacks(null, user);
}

module.exports = {
    getUserById
}


