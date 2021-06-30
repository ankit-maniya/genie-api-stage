'use strict'

const fastify = require('fastify')({
  logger: false
  //trustProxy: true,
  // logger: {
  //   level: 'warn',
  //   redact: {
  //     paths: ['req', 'reqId', 'res', 'responseTime'],
  //     remove: true
  //   },
  //   prettyPrint: {
  //     colorize: false,
  //     translateTime: true
  //   },
  //   file: './logs.log'
  // }
})

fastify.get('/', async (req, reply) => {
  fastify.log.warn('GET /', req, reply);
  return {
    data: [{
      hello1: 'world'
    }, {
      hello2: 'world1'
    }, {
      hello3: 'world3'
    }]
  }
})

fastify.get('/testAPI', async (req, reply) => {
  fastify.log.warn('GET /testAPI', req, reply);
  return {
    success: "Amazing ! Phillip you made it! :) :)"
  }
})

fastify.get('/tasks/summary', async (req, reply) => {
  fastify.log.warn('GET /tasks/summary Invalid request', req, reply);
  return {
    success: "Call cron tasks summary"
  }
})

fastify.get('/mail/weekly', async (req, reply) => {
  fastify.log.error('GET /mail/weekly Invalid request', req, reply);
  return {
    success: "Call cron mail weekly"
  }
})

const initialize = () => {
  try {
    const PORT = process.env.PORT || 3000;
    fastify.listen(PORT, () => {
      fastify.log.warn(`App listening on port ${PORT}`);
      fastify.log.warn('Press Ctrl+C to quit.');
    });
  } catch (error) {
    fastify.fastify.log.error(err)
    process.exit(1)
  }
}

initialize()