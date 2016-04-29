export default {
  path: '/{param*}',
  method: 'GET',
  config: { 
    auth: 'simple',
    handler: (request, reply) => {
      reply.file('./public/' + 'index.html')
    }
  }
}
