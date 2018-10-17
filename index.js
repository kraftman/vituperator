
// need hook listener
// description parser
// sender

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

fastify.post('/hook', (request, reply) => {
  console.log(request)
  res.send('ok')
})

fastify.listen(80, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})