const {users_schema, userById_schema, userByName_schema, userByOnboarded_schema, userByHeight_schema, addUser_schema} = require('../schema/users');

async function routes(fastify, options){
    fastify.get('/users', users_schema);
    fastify.get('/users/id/:userId', userById_schema);
    fastify.get('/users/name/:name', userByName_schema);
    fastify.get('/users/onboarded/:onboarded', userByOnboarded_schema);
    fastify.get('/users/height/:height', userByHeight_schema);
    fastify.post('/users', addUser_schema);

    fastify.post('/insert', async (req, res) => {
      const collection = await fastify.mongo.db.collection('businessUnits');
      const status = await collection.insert(req.body);
      res.send(status);
    });

    fastify.get('/items/:type', async (req,res) => {
      const collection = await fastify.mongo.db.collection('items');
      res.send(await collection.find({type: req.params.type}).toArray());
    });

    fastify.get('/', async (req,res) => {
      res.send('Welcome to test');
    });

};

module.exports = routes;