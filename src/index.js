// Primary dependencies
let express  = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let mongodb = require('mongodb')

// File inclusions
let physicianRoute = require('./routes/physicians')

app.use(bodyParser.json())
app.use((req, res, next) => {
  console.log(`${new Date().toString} => ${req.originalUrl}, req.body`)
  next()
})
// Allows displaying of .html files from ../public
app.use(express.static('public'))
app.use(physicianRoute)





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
