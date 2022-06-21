// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// const fastify = require('fastify')({ logger: true })
// fastify.register(require('./db-connection'));
// fastify.register(require('@fastify/swagger'),{
//     exposeRoute: true,
//     routePrefix: '/docs',
//     swagger:{
//         info: {
//             title: 'fastify-api',
//             description: 'Testing Swagger',
//             version: '0.1'
//         },
//     }
// });

// fastify.register(require('./route/users'));

// const start = async () => {
//   try {
//     await fastify.listen(5000,() => {
//     console.log('Here i am');
//     });
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// };
// start();


const fastify = require("fastify")({
  logger: true // you can also define the level passing an object configuration to logger: {level: 'debug'}
});

fastify.addContentTypeParser('application/json', {}, (req, body, done) => {
  done(null, body.body);
});

fastify.get('/', async (request, reply) => {
  reply.send({message: 'Hello World!'})
});

const fastifyFunction = async (request, reply) => {
  await fastify.ready();
  fastify.server.emit('request', request, reply)
}

exports.fastifyFunction = fastifyFunction;

