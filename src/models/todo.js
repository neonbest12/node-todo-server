import bookshelf from '../db';

const TABLE_NAME = 'todos';

class Todo extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Todo;
