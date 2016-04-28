const getAllVolunteers = require('../redis/redisFunctions.js').getAllVolunteers

export default {
  path: '/getAllVolunteers',
  method: 'GET',
  handler: (request, reply) => {
    getAllVolunteers((result) => {
      reply(result)
    })
  }
}

