import Boom from '@hapi/boom';

import User from '../models/user';

export function getAllUsers() {
  return User.fetchAll();
}

export function getUser(email) {
  return new User({ email })
    .fetch()
    .then(user => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

export function createUser({ email, hashedPassword }) {
  return new User({ email: email, password: hashedPassword }).save();
}

export function updateUser(id, user) {
  return new User({ id }).save({ usernname: user.username, password: user.hashedPassword });
}

export function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}
