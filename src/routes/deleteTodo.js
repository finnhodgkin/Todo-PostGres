const del = require('./../database/del');

module.exports = {
  method: 'DELETE',
  path: '/{id}',
  handler: (req, reply) => {
    del.todo(req.params.id, (dbErr, res) => {
      if (dbErr) {
        console.log(dbErr.message);
        return reply({ error: 'error checking todo on database' });
      }
      reply({ msg: res });
    });
  },
};
