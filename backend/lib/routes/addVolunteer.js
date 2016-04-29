import { addNewVolunteer } from '../redis/redisFunctions.js'

export default {
  path: '/newVolunteer',
  method: 'POST',
  handler: (request, reply) => {
    console.log('adding volunteer', request.payload)
    addNewVolunteer(request.payload)
    reply.redirect('/')
  }
}
