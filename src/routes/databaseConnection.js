// File that connects to the mongoDB database upon application start

let mongoose = require('mongoose')

// variables used to connect to the mongo database
const server = 'ds047632.mlab.com:47632'
const database ='restful-api-test-database'
const user = 'nkw1'
const password = 'NKW_t3ch!1'

// command to connect to the mongo database
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, {useNewUrlParser: true})
