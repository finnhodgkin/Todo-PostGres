const put = require('./../database/put');

module.exports = {
  method: 'PUT',
  path: '/',
  handler: (req, reply) => {
    put.check(req.payload, (dbErr, res) => {
      if (dbErr) { return reply({ error: 'error checking todo on database' }); }
      reply({ id: res.id });
    });
  },
};
