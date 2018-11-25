let express  = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req, res, next) => {
  console.log(`${new Date().toString} => ${req.originalUrl}, req.body`)
  next()
})

app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
