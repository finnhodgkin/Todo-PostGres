const get = require('./../database/get');

module.exports = {
  method: 'GET',
  path: '/get',
  handler: (req, reply) => {
    get.todos((dbErr, todos) => {
      if (dbErr) { return reply({ error: 'error getting todos from database' }); }

      reply({ todos });
    });
  },
};
