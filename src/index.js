// Primary dependencies
let express  = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
// File inclusions
let personRoute = require('./routes/person')
let sampleRoute = require('./routes/sample')

app.use(bodyParser.json())
app.use((req, res, next) => {
  console.log(`${new Date().toString} => ${req.originalUrl}, req.body`)
  next()
})

app.use(personRoute)
app.use(sampleRoute)
// Allows displaying of .html files from ../public
app.use(express.static('public'))

// ERROR 404 Handling
app.use((req, res, next) => {
  res.status(404).send('Error 404, wrong page')
})
// ERROR 500 Handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
