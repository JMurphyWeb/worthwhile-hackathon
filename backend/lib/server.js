require('env2')('./config.env')

import func from './redis/database.js'
func()

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// helper methods
import { handlePlugins, handleStart } from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'
import hapiAuthBasic from 'hapi-auth-basic'
import Bcrypt from 'bcrypt'

// server routes
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'
import GetAllVolunteers from './routes/getAllVolunteers.js'
import AddNewVolunteer from './routes/addVolunteer.js'

const ConnectionSettings = { port, routes: {cors: true} }
const Plugins = [ Inert, hapiAuthBasic ]
const Routes = [ Images, ReactUrls, Scripts, GetAllVolunteers, AddNewVolunteer ]

const validate = function (request, username, password, callback) {
    Bcrypt.compare(password, process.env.PASSWORD, (err, isValid) => {
        callback(err, isValid, { id: process.env.USERID, name: process.env.USERNAME });
    });
};

server.connection(ConnectionSettings)
server.register(Plugins, (err) => {
  if (err) {
    console.log('plugins error: ', err)
    throw err
  }
  server.auth.strategy('simple', 'basic', { validateFunc: validate });
})
server.route(Routes)
server.start(handleStart)

export default server
