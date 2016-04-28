import { addNewVolunteer } from '../redis/redisFunctions.js'

export default {
  path: '/newVolunteer',
  method: 'POST',
  handler: (request, reply) => {
    addNewVolunteer(request.payload)
    reply.redirect('/')
  }
}
