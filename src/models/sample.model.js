let mongoose = require('mongoose')

// variables used to connect to the mongo database
const server = 'ds047632.mlab.com:47632'
const database ='restful-api-test-database'
const user = 'nkw1'
const password = 'NKW_t3ch!1'

// command to connect to the mongo database
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, {useNewUrlParser: true})

let SampleSchema = new mongoose.Schema({
  fName: String,
  // verification for this done in app layer itself (mongoose) not by mongodb
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Sample', SampleSchema)
