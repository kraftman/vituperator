'use strict';

const hook = require('./src/hook.js');
const fastify = require('fastify')({
  logger: true,
});

fastify.post('/hook', async (req, res) => {
  await hook.handlePRUpdate(req.body)
  res.send('ok')
});

fastify.listen(80, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
