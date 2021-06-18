import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService';
import hashPassword from '../utils/hashPassword';


export function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

export function fetchByEmail(req, res, next) {
  userService
    .getUser(req.body.email)
    // .then(data => res.json({ data }))
    .then(data => {
      res.locals.user = data.attributes;
      next()
    })
    .catch(err => next(err));
}

export async function create(req, res, next) {
  await hashPassword(req);
  userService
    .createUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

export function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

export function deleteUser(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
}
