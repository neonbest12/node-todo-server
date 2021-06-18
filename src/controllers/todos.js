import HttpStatus from 'http-status-codes';

import * as todoService from '../services/todoService';

export function fetchAll(req, res, next) {
  todoService
    .getAllTodos(req.user.email, req.query.date)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

export function fetchTodo(req, res, next) {
  todoService
    .getTodo(req.user.email)
    .then(data => {
      console.log(data)
      res.json({ data: data.attributes })
    })
    .catch(err => next(err));
}

export function create(todo, req, next) {
  return todoService
    .createTodo(todo)
    .then(data => data.attributes)
    // .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

export function update(todo, req, next) {
  return todoService
    .updateTodo(todo)
    .then(data => data.attributes)
    // .then(data => res.json({ data }))
    .catch(err => next(err));
}

export function deleteTodo(todo, next) {
  return todoService
    .deleteTodo(todo)
    .then(data => data)
    // .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
}
