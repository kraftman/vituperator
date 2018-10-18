'use strict';

const hook = require('../hook.js');
const buildFastify = async (fastify) => {

  fastify.get('/', async () => {
    return 'ready'
  })

  fastify.post('/hook', async (req) => {
    await hook.handlePRUpdate(req.body)
    return 'ok'
  });

}

module.exports = buildFastify;