

const hook = require('./src/hook.js');
const fastify = require('fastify')({
  logger: true
})

fastify.post('/hook', hook)

fastify.listen(80, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})