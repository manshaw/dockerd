const fastify = require('fastify')({ logger: true })
fastify.register(require('./db-connection'));
fastify.register(require('@fastify/swagger'),{
    exposeRoute: true,
    routePrefix: '/docs',
    swagger:{
        info: {
            title: 'fastify-api',
            description: 'Testing Swagger',
            version: '0.1'
        },
    }
});

fastify.register(require('./route/users'));

const start = async () => {
  try {
    await fastify.listen(3000,'0.0.0.0',() => {
    console.log('Here i am');
    });
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
};
start();