// Factory Function es una function que crea una function
const { v4: uuidv4 } = require("uuid");
const getAge = require("get-age");

const buildPerson = ({ name, birthdate }) => {
  return {
    id: uuidv4(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const obj = { name: "Jonas", birthdate: "1985-10-21" };
const jonas = buildPerson(obj);
console.log(jonas);
