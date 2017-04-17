const hapi = require('hapi');
const server = new hapi.Server();
require('env2')('config.env');

const inert = require('inert');
const cookieAuthModule = require('hapi-auth-cookie');
const contextCredentials = require('hapi-context-credentials');

const routes = require('./routes');

server.connection({
  port: process.env.PORT || 4000,
  routes: { cors: true }
});

server.register([inert], err => {
  if (err) throw err;

  // server.auth.strategy('base', 'cookie', 'required', {
  //   password: process.env.COOKIE_PASSWORD,
  //   cookie: 'mmedium-cookie',
  //   isSecure: process.env.NODE_ENV !== 'dev',
  //   ttl: 24 * 60 * 60 * 1000, //@TODO test timing works as expected
  //   redirectTo: '/',
  //   redirectOnTry: false,
  //   isSameSite: false,
  // });
  // server.views(handlebars);

  server.route(routes);
});


module.exports = server;
