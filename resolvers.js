const user = {
  _id: '1',
  name: 'Scott',
  email: 'scott@yahoo.com',
  picture: 'https://cloundinary.com/asdf'
};

module.exports = {
  Query: {
    me: () => user
  }
};
