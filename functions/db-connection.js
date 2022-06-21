const fastifyPlugin = require('fastify-plugin');

async function dbConnect(fastify, options){
    fastify.register(require('fastify-mongodb'),{
        url: 'mongodb+srv://manshoor:pcFC67A0r4HIKKgC@rain-maker.qitdto6.mongodb.net/rain-maker?authSource=rain-maker&authMechanism=SCRAM-SHA-1'
        // url: 'mongodb+srv://manshoor:pcFC67A0r4HIKKgC@rain-maker.qitdto6.mongodb.net/?retryWrites=true&w=majority'
    });
}

module.exports = fastifyPlugin(dbConnect);