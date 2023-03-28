/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // eslint-disable-next-line no-undef
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();
