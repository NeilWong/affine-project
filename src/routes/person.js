// Routes are considered mini applications
// to create one, Essentially reference express and a router from that express instance
let express = require("express")
let router = express.Router()

// QuertyString -> querty property on the request object -> makes call to get person object
// allows calling localhost:3000/person?name=thomas&age=20 -> anything after the question mark is a query string (is a key value)
// can add additional key values with ampersands(&)
router.get('/person', (req, res) => {
  if (req.query.name) {
    res.send(`You have requested a person ${req.query.name}`)
  }
  else {
    res.send(`You have requested a person`)
  }
})

// params property on the request object
//e.g. loclahost:3000/person/thomas -> returns whatever is after person-> :name reoresents param's name
router.get('/person/:name', (req, res) => {
  res.send(`You have requested a person ${req.params.name}`)
})

// error triggering route that we're using to test a error 500 (we dont use /person/error bc it would conflcit with the other routes)
router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})

// export the router -> allows us to import in index.js
module.exports = router
