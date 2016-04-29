const Path = require('path')
const fs = require('fs')
const client = require('./client.js')

const getDatabase = () => {
  return fs.readFileSync(Path.join(__dirname, 'OxfizzVolunteers.tsv'), 'utf8')
}

const processDatabase = (string) => {
  return string.split('\n')
    .slice(1)
    .map((rowString) => rowString.split('\t'))
    .map((rowArray, i) => {
      console.log(rowArray[1], i);
      rowArray[6] = rowArray[6].replace(/"/g, '')
      return rowArray
    })
    .map((r) => {
      return [r[1], r[2], r[3], r[4], r[6].slice(0, 1), r[6].slice(1), r[7], r[8], r[9], r[14], r[13]]
    })
}

const logDatabase = (array) => {
  array = array.map((item) => {
    const volunteer = {
      firstName: item[0],
      surname: item[1],
      phoneNumber: item[2],
      emailAddress: item[3],
      subjectGroup: item[4],
      subject: item[5],
      university: item[6],
      location: item[7],
      dbsStatus: item[8],
      starRating: item[9],
      notes: item[10]
    }
    return volunteer
  })
  const stringified = JSON.stringify(array)
  client.HSET('volunteers', 'array', stringified)
  console.log(array)
}

module exports = () => {
  logDatabase(processDatabase(getDatabase()))
}
