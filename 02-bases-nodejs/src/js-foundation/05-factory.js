// Factory Function es una function que crea una function

// const { getAge } = require("../plugin/get-age.plugin");
// const { getUUID } = require("../plugin/get-id.plugin");
const { getAge, getUUID } = require("../plugins");

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const obj = { name: "Jonas", birthdate: "1985-10-21" };
const jonas = buildPerson(obj);
console.log(jonas);
