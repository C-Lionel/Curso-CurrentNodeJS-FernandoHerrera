
// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/04-arrows');

const { getUUID, getAge } = require('./plugins');


const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({ getUUID, getAge })

const obj = {name: 'John', birthdate: '1985-10-21'}

const john = makePerson(obj);

console.log({john});




// console.log(emailTemplate);

// const id = 1

// getUserById( id, ( err, user ) => {
    
//     if (err) throw new Error(err);

//     console.log({ user });

// } );

 