const post = require('./../database/post');

module.exports = {
  method: 'POST',
  path: '/',
  handler: (req, reply) => {
    post.todo(req.payload, (dbErr, res) => {
      if (dbErr) { return reply({ error: 'error getting todos from database' }); }
      reply({ id: res.id });
    });
  },
};
