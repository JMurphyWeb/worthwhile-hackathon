const client = require('./client.js')

const addNewVolunteer = (volunteerObj) => {
  client.HGET('volunteers', 'array', (err, reply) => {
    if (err) {
      throw err
    } else {
      const parsed = JSON.parse(reply)
      const newArray = JSON.stringify([...parsed, volunteerObj])
      client.HSET('volunteers', 'array', newArray)
    }
  })
}

const getAllVolunteers = (cb) => {
  client.HGET('volunteers', 'array', (err, reply) => {
    if (err) {
      throw err
    } else {
      cb(reply)
    }
  })
}

module.exports = {
  addNewVolunteer,
  getAllVolunteers
}