import server from '../server.js'

export const handleStart = (err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
}
