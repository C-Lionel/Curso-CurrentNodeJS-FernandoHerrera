
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

    const getUserById = ( id, callbacks ) => {
    const user = users.find( ( user ) => {
        return user.id === id;
    } );

    if( !user ) return callbacks(`USUARIO no encontrado con el id ${id}`);
    
    return callbacks(null, user);
}

module.exports = {
    getUserById
}


