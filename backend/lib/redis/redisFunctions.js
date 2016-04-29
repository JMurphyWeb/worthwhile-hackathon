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

// const testFunc = () => {
//   getAllVolunteers((reply) => {
//     console.log('length before: ', JSON.parse(reply).length)
//   })

//   // addNewVolunteer({
//   //   firstName: 'stuff',
//   //   surname: 'stuff',
//   //   phoneNumber: 'stuff',
//   //   emailAddress: 'stuff',
//   //   subjectGroup: 'stuff',
//   //   subject: 'stuff',
//   //   university: 'stuff',
//   //   dbsStatus: 'stuff',
//   //   starRating: 'stuff',
//   //   notes: 'stuff'
//   // })

//   // setTimeout(getAllVolunteers.bind(null, (reply) => {
//   //   console.log('length after: ', JSON.parse(reply).length)
//   // }), 1000)
  

// }

// testFunc()

module.exports = {
  addNewVolunteer,
  getAllVolunteers
}