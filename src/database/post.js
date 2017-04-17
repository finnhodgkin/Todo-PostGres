const connect = require('./db_connect');
const post = {};

post.todo = ({ name, isComplete = false }, callback) => {

  const addTodo = 'INSERT INTO todos (name, isComplete) VALUES ($1, $2) RETURNING ID;';
  connect.query(addTodo, [name, isComplete], (err, id) => {
    if (err) { return callback(new Error('Database error')); }

    callback(null, id.rows[0]);
  });
};

module.exports = post;
