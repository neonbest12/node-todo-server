import Boom from '@hapi/boom';

import Todo from '../models/todo';

import knex from "knex"

export function getAllTodos(email, date) {
  return Todo.where(knex.raw(`email = '${email}' and created_at >='${date}' and created_at < DATE_ADD('${date}',INTERVAL 1 DAY)`)).fetchAll();
}

export function getTodo(email) {
  return new Todo()
    .where({ email }).fetch()
    .then(todo => todo)
    .catch(Todo.NotFoundError, () => {
      throw Boom.notFound('Todo not found');
    });
}

export function createTodo({ email, description, isCompleted }) {
  return new Todo({ email, description, isCompleted }).save();
}

export function updateTodo({ d_id, description, isCompleted }) {
  return new Todo({ id: d_id, isCompleted }).save({ description });
}

export function deleteTodo({ d_id }) {
  return new Todo({ id: d_id }).fetch().then(todo => todo.destroy());
}
