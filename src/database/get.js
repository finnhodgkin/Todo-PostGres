const connect = require('./db_connect');
const get = {};

get.todos = (callback) => {

  connect.query(`SELECT * from todos ORDER BY id ASC;`, (err, response) => {
    if (err) { return callback(new Error('Database error')); }

    const todos = response.rows.map(todo => {
      todo.isComplete = todo.iscomplete;
      delete todo.iscomplete;
      return todo;
    });
    
    callback(null, todos);
  });
};

module.exports = get;
