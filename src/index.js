// Primary dependencies
let express  = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let mongodb = require('mongodb')
let urlencodedParser = bodyParser.urlencoded({extended: false})

// File inclusions
let physicianRoute = require('./routes/physicians')

app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use((req, res, next) => {
//   console.log(`${new Date().toString} => ${req.originalUrl}, req.body`)
//   next()
// })
// Allows displaying of .html files from ../public
app.use(express.static('public'))
app.use(physicianRoute)

// ERROR 500 Handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
