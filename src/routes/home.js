const get = require('./../database/get');

module.exports = {
  method: 'GET',
  path: '/{any}',
  handler: (req, reply) => {
    reply.file('./public/index.html')
  },
};
