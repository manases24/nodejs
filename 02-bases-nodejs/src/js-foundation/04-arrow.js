const users = [
    {
      id: 1,
      name: "Jonas",
    },
    {
      id: 2,
      name: "Marta",
    },
  ];
  
  const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(null, user) : callback(`USUARIO no encontrado: ${id}`);
  }
  
  module.exports = {
    getUserById,
  };
  