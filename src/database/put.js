const connect = require('./db_connect');
const put = {};

put.check = ({ id, isComplete }, callback) => {
  
  const check = 'UPDATE todos SET iscomplete = $2 WHERE id = $1 RETURNING id;';
  connect.query(check, [id, isComplete], (err, id) => {
    if (err) { return callback(new Error('Database error')); }

    callback(null, id.rows[0]);
  });
};

module.exports = put;
