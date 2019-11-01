const { AuthenticationError } = require('apollo-server');

const user = {
  _id: '1',
  name: 'Scott',
  email: 'scott@yahoo.com',
  picture: 'https://cloundinary.com/asdf'
};

const authenticated = next => (root, args, ctx, info) => {
  console.log('TCL: ctx', ctx);
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must be logged in');
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
