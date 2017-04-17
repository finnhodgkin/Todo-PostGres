const connect = require('./db_connect');
const del = {};

del.todo = (id, callback) => {
  const delTodo = 'DELETE FROM todos WHERE id = $1;';
  connect.query( delTodo, [id], (err) => {
    if (err) { return callback(new Error('Database error')); }
    callback(null, 'Success');
  });
};

module.exports = del;
