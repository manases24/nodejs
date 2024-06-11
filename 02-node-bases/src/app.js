// const { getAge, getUUID } = require('./plugins');
// const { emailTemplate } = require('./js-foundation/01-template')
// const { proccessDes } = require('./js-foundation/02-destructuring')
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { buildMakePerson } = require("./js-foundation/05-factory");
const getPokemonById = require('./js-foundation/06-promises');

// const id = 2;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user)
// });

// ! Referencia a la function factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });

getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( err ) => console.log( err ) )
//   .finally( () => console.log('Finalmente') );