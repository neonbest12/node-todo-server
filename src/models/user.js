import bookshelf from '../db';

const TABLE_NAME = 'users';

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default User;
